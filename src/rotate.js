const { maths, transforms, utils } = require('@jscad/modeling')

const { checkOptions, isNumberArray } = require('./commonChecks')

/**
 * Rotates the objects about the axis, or around an arbitrary axis.
 *
 * @param {Object} options - options for centering
 * @param {Float|Array} options.a - either single number or an array of numbers, specifying angles of rotation
 * @param {Array} [options.v=[0,0,1]] - a vector [X, Y, Z] that defines an arbitrary axis for rotation
 * @param {...Object} objects - the objects to rotate
 * @return {Object|Array} the rotated object, or a list of rotated objects
 *
 * @example
 * let rotated1 = rotate({a=[45]}, square()) // rotate 2D objects
 * let rotated2 = rotate({{a=[45, 180, -90]}, cube())
 * let rotated3 = rotate({{a=[45, 180, -90], v=[0, 1, 0]}, cube())
 */
const rotate = (options, ...objects) => {
  // check the options
  checkOptions(options, ['a'])
  if (!isNumberArray(options.a, 1)) throw new Error('angles must be an array of rotations')

  const defaults = {
    v: [0, 0, 1] // rotate about the Z axis
  }
  const { v } = Object.assign({ }, defaults, options)

  // perform checks on options
  if (!isNumberArray(v, 3)) throw new Error('vector must be an array of values')

  // convert angles to RADIANS
  const angles = options.a.map((deg) => utils.degToRad(deg))
  while (angles.length < 3) angles.push(0)

  // perform the rotations as per SCAD
  const rotations = maths.mat4.create()
  maths.mat4.fromVectorRotation(rotations, [0, 0, 1], v)
  maths.mat4.fromXRotation(rotations, angles[0])
  maths.mat4.fromYRotation(rotations, angles[1])
  maths.mat4.fromZRotation(rotations, angles[2])

  // apply the rotations to the objects
  return transforms.transform(rotations, objects)
}

module.exports = rotate
