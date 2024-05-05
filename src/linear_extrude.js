const { maths, transforms, geometries, extrusions, utils } = require('@jscad/modeling')

const { checkOptions, isGT, isGTE, isNumberArray } = require('./commonChecks.js')

const getScale = (scale, steps) => {
  if (scale > 0.0) return (scale - 1.0) / steps
  if (scale < 0.0) return (1.0 - scale) / steps
  return 0.0
}

/**
 * Generate a 3D shape by extruding a 2D object about the Z-axis.
 *
 * @param {Object} options - options for extruding
 * @param {Float} [options.height=100] - height of the extruded shape
 * @param {Integer} [options.slices=8] - number of intermediary steps
 * @param {Integer} [options.twist=0] - angle in which to twist the extusion about the Z-axis
 * @param {Integer} [options.scale=0.0] - scale to acheive for the final the shape
 * @param {Boolean} [options.center=false] - whether to center the final 3D shape
 * @returns {CSG} new extruded shape
 *
 * @example
 * let shape1 = linear_extrude({height: 10}, square())
 */
const linear_extrude = (options, element) => {
  // check the options
  checkOptions(options, []) // allow named options, with defaults

  const defaults = {
    height: 100,
    center: false,
    twist: 0,
    scale: [0.0, 0.0],
    slices: 8
  }
  let { height, center, twist, scale, slices } = Object.assign({}, defaults, options)

  // convert scalar scale to array
  if (Number.isFinite(scale)) {
    scale = [scale, scale]
  }

  // check the options
  if (!isGT(height, 0)) throw new Error('height must be positive')
  if (!isNumberArray(scale, 2)) throw new Error('scale must be an array of factors')
  if (!isGTE(slices, 1)) throw new Error('slices must be positive')

  // determine the per step angle of rotation and per step scale
  let twistSteps = slices
  if (twist === 0 && scale === 1.0) {
    twistSteps = 1
  }

  // WEIRD AGAIN... why clockwise twist!!!
  const twistAngle = utils.degToRad(twist) / twistSteps * -1.0 + 0.0 // rotation to apply to each step

  const twistScale = [
    getScale(scale[0], twistSteps),
    getScale(scale[1], twistSteps)
  ] // scale to apply to each step

  const offsetv = maths.vec3.fromValues(0, 0, height)

  // console.log("twistSteps",twistSteps)
  // console.log("twistAngle",twistAngle)
  // console.log("twistScale",twistScale)

  // create a slice (3D) from the element (2D) for extruding
  const baseSides = geometries.geom2.toSides(element)
  if (baseSides.length === 0) throw new Error('the given element cannot be empty')

  const baseSlice = extrusions.slice.fromSides(baseSides)

  // set up the callback function to create each step
  const matrix = maths.mat4.create()
  const matrixRotation = maths.mat4.create()
  const matrixOffset = maths.mat4.create()
  const matrixScale = maths.mat4.create()

  const vecZoffset = maths.mat4.create()
  // const vecZscale = maths.mat4.create()

  const createTwist = (progress, index, base) => {
    const Zrotation = index * twistAngle
    const Zoffset = maths.vec3.scale(vecZoffset, offsetv, index / twistSteps)
    const Zscale = maths.vec3.fromValues((index * twistScale[0]) + 1.0, (index * twistScale[1]) + 1.0, 1.0)

    // apply scale, offset, rotation
    maths.mat4.identity(matrix)
    maths.mat4.multiply(
      matrix, matrix, maths.mat4.fromZRotation(matrixRotation, Zrotation)
    )
    maths.mat4.multiply(
      matrix, matrix, maths.mat4.fromTranslation(matrixOffset, Zoffset)
    )
    maths.mat4.multiply(
      matrix, matrix, maths.mat4.fromScaling(matrixScale, Zscale)
    )

    return extrusions.slice.transform(matrix, base)
  }

  options = {
    numberOfSlices: twistSteps + 1,
    capStart: true,
    capEnd: true,
    repair: true,
    callback: createTwist
  }

  let output = extrusions.extrudeFromSlices(options, baseSlice)

  if (center === true) {
    output = transforms.centerZ(output)
  }
  return output
}

module.exports = linear_extrude
