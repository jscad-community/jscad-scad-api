const { primitives, utils } = require('@jscad/modeling')

const { checkOptions, isGT } = require('./commonChecks')

/**
 * Creates a sphere at the origin.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.r=1] - radius of the sphere
 * @param {Float} [options.d=0] - if provided, diameter of the sphere where d = r * 2
 * @param {Integer} [options.fa=12] - minimum angle (in degrees) of each fragment
 * @param {Integer} [options.fs=2] - minimum circumferential length of each fragment
 * @param {Integer} [options.fn=0] - if provided, number of fragments in 360 degrees
 * @returns {Geom3} new 3D geometry
 *
 * @example
 * let sphere1 = sphere({r: 10})
 * let sphere2 = sphere({d: 20})
 * let sphere3 = sphere({r: 15, fa: 12, fs: 2})
 * let sphere4 = sphere({r: 15, fn=32})
 */
const sphere = (options) => {
  // check the options
  checkOptions(options, false) // allow named options or none

  const defaults = {
    r: 1,
    d: 0,
    fa: 12,
    fs: 2,
    fn: 0
  }
  let { r, d, fa, fs, fn } = Object.assign({}, defaults, options)

  // convert diameter to radius
  if (d > 0) {
    r = d / 2
  }

  if (!isGT(r, 0)) throw new Error('r must be positive')

  // calculate the segments
  let segments = fn
  if (segments <= 0) {
    const minLength = fs
    const minAngle = utils.degToRad(fa)
    segments = utils.radiusToSegments(r, minLength, minAngle)
  }

  // WHY IS OPENSCAD SO WEIRD?
  const center = [0, 0, 0]

  // determine options for JSCAD
  options = { radius: r, center, segments }

  return primitives.sphere(options)
}

module.exports = sphere
