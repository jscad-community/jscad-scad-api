const { primitives, utils } = require('@jscad/modeling')

const { checkOptions, isGT, isGTE } = require('./commonChecks')

/**
 * Creates a circle at the origin.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.r=1] - radius of the circle
 * @param {Float} [options.d=0] - if provided, diameter of the circle where d = r * 2
 * @param {Integer} [options.fa=12] - minimum angle (in degrees) of each fragment
 * @param {Integer} [options.fs=2] - minimum circumferential length of each fragment
 * @param {Integer} [options.fn=0] - if provided, number of fragments in 360 degrees
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
  checkOptions(options, false) // allow default options

  const defaults = {
    r: 1,
    d: 0,
    fa: 12,
    fs: 2,
    fn: 0
  }
  let { r, d, fa, fs, fn } = Object.assign({}, defaults, options)

  // check options
  if (!isGT(r, 0)) throw new Error('r must be positive')
  if (!isGTE(d, 0)) throw new Error('d must be positive')

  // convert diameter to radius
  if (d > 0) {
    r = d / 2
  }

  let segments = fn
  if (segments <= 0) {
    const minLength = fs
    const minAngle = utils.degToRad(fa)
    segments = utils.radiusToSegments(r, minLength, minAngle)
  }

  // determine the options for JSCAD
  options = { radius: r, segments }

  return primitives.circle(options)
}

module.exports = circle
