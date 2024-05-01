const { transforms, maths } = require('@jscad/modeling')

const { checkOptions } = require('./commonChecks')

// convert the SCAD matrix to JSCAD equivalent
// NOTE: SCAD matrix is 4x3 array, or 4x4 array
const convertMatrix = (s) => maths.mat4.fromValues(
  s[0][0], s[0][1], s[0][2], s[0][3],
  s[1][0], s[1][1], s[1][2], s[1][3],
  s[2][0], s[2][1], s[2][2], s[2][3],
  0, 0, 0, 1
)

/**
 * Transforms the object using the given affine transformation matrix.
 *
 * The fourth row of the matrix is forced to [0,0,0,1] and can be omitted.
 *
 * @param {Object} options - options for multmatrix
 * @param {Array} options.m - affine transformation matrix, where the matrix is 4×3 or 4x4 array
 * @param {...Object} objects - the objects to transform
 * @return {Object|Array} the transformed object, or a list of transformed objects
 *
 * @example
 */
const multmatrix = (options, ...objects) => {
  // check the options
  checkOptions(options, []) // allow named options with defaults

  const defaults = {
    m: null
  }
  let { m } = Object.assign({ }, defaults, options)

  if (m) {
    m = convertMatrix(m)
  } else {
    m = maths.mat4.create()
  }

  return transforms.transform(m, objects)
}

module.exports = multmatrix
