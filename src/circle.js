const { primitives } = require('@jscad/modeling')

const { checkOptions, isGT, isGTE } = require('./commonChecks.js')
const { get_fragments_from_options } = require('./globals.js')

/**
 * Creates a circle at the origin.
 *
 * If used, $fa, $fs and $fn must be named parameters.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.r=1] - radius of the circle
 * @param {Float} [options.d=0] - if provided, diameter of the circle where d = r * 2
 * @returns {Geom2} new 2D geometry
 *
 * @example
 * let circle1 = circle({r: 10})
 * let circle2 = circle({d: 20})
 * let circle3 = circle({r: 15, fa: 12, fs: 2})
 * let circle4 = circle({r: 10, fn: 6})
 */
const circle = (options) => {
  // check the options
  options = checkOptions(options, false) // allow default options

  const defaults = {
    r: 1,
    d: 0
  }
  let { r, d } = Object.assign({}, defaults, options)

  // check options
  if (!isGT(r, 0)) throw new Error('r must be positive')
  if (!isGTE(d, 0)) throw new Error('d must be positive')

  // convert diameter to radius
  if (d > 0) {
    r = d / 2
  }

  // determine the options for JSCAD
  const segments = get_fragments_from_options(options, r)

  options = { radius: r, segments }

  return primitives.circle(options)
}

module.exports = circle
