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
 * let mirrored1 = mirror({v: [1, 0, 0]}, cube()) // mirror about the X axis
 */
const mirror = (options, ...objects) => {
  // check the options
  checkOptions(options, []) // allow named options, with defaults

  const defaults = {
    v: [1, 0, 0] // mirror about the X axis
  }
  const { v } = Object.assign({ }, defaults, options)

  if (!isNumberArray(v, 3)) throw new Error('vector must be an array of values')

  options = {
    normal: v,
    origin: [0, 0, 0]
  }

  return transforms.mirror(options, objects)
}

module.exports = mirror
