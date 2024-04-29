const { transforms } = require('@jscad/modeling')

const { checkOptions, isNumberArray } = require('./commonChecks')

/**
 * Transforms the object into a mirror of the original, as if it were the mirror image seen through a plane intersecting the origin.
 *
 * @param {Object} options - options for mirror
 * @param {Float|Array} options.v - the perpendicular, normal vector of the plane passing through the origin
 * @param {...Object} objects - the objects to mirror
 * @return {Object|Array} the mirrored object, or a list of mirrored objects
 *
 * @example
 * let mirrored1 = mirror({v=[1, 0, 0]}, cube()) // mirror about the X axis
 */
const mirror = (options, ...object) => {
  // check the options
  checkOptions(options, ['v'])
  if (!isNumberArray(options.v, 3)) throw new Error('vector must be an array of values')

  const normal = options.v
  const origin = [0, 0, 0]

  return transforms.mirror({ normal, origin }, object)
}

module.exports = mirror
