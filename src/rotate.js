const { maths, transforms, utils } = require('@jscad/modeling')

const { checkOptions, isNumberArray } = require('./commonChecks')

/**
 * Rotates the objects about the axis, or around an arbitrary axis.
 *
 * When 'a' (angles) is an array, the 'v' (axis) argument is ignored.
 * When 'a' (angles) is a number, the rotation is about the Z axis.
 *
 * @param {Object} options - options for centering
 * @param {Float|Array} options.a - either single number or an array of numbers, specifying angles of rotation
 * @param {Array} [options.v=[0,0,1]] - a vector [X, Y, Z] that defines an arbitrary axis for rotation
 * @param {...Object} objects - the objects to rotate
 * @return {Object|Array} the rotated object, or a list of rotated objects
 *
 * @example
 * let rotated1 = rotate({a: 45}, square()) // rotate 2D objects about the Z axis
 * let rotated2 = rotate({{a: [45, 180, -90]}, cube())
 * let rotated3 = rotate({{a: [45, 180, -90], v: [0, 1, 0]}, cube())
 */
const rotate = (options, ...objects) => {
  // check the options
  checkOptions(options, ['a'])

  const defaults = {
    a: [0, 0, 0],
    v: [0, 0, 1] // rotate about the Z axis
  }
  let { a, v } = Object.assign({ }, defaults, options)

  // convert scalar size to array
  if (Number.isFinite(a)) {
    // rotation about the Z axis only
    a = [0, 0, a]
    v = [0, 0, 1]
  }

  // perform checks on options
  if (!isNumberArray(a, 3)) throw new Error('a must be an array of x,y,z rotations')
  if (!isNumberArray(v, 3)) throw new Error('v must be an array of values')

  // convert angles to RADIANS
  const angles = a.map((deg) => utils.degToRad(deg))
  while (angles.length < 3) angles.push(0)

  // perform the rotations as per SCAD
  const rotations = maths.mat4.create()
  maths.mat4.fromVectorRotation(rotations, [0, 0, 1], v)

  maths.mat4.rotateZ(rotations, rotations, angles[2])
  maths.mat4.rotateY(rotations, rotations, angles[1])
  maths.mat4.rotateX(rotations, rotations, angles[0])

  // apply the rotations to the objects
  return transforms.transform(rotations, objects)
}

module.exports = rotate
