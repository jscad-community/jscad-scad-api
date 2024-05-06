const { primitives } = require('@jscad/modeling')

const { checkOptions, isGT } = require('./commonChecks')
const { get_fragments_from_options } = require('./globals.js')

/**
 * Creates a sphere at the origin.
 *
 * If used, $fa, $fs and $fn must be named parameters.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.r=1] - radius of the sphere
 * @param {Float} [options.d=0] - if provided, diameter of the sphere where d = r * 2
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
  options = checkOptions(options, false) // allow named options or none

  const defaults = {
    r: 1,
    d: 0
  }
  let { r, d } = Object.assign({}, defaults, options)

  // convert diameter to radius
  if (d > 0) {
    r = d / 2
  }

  if (!isGT(r, 0)) throw new Error('r must be positive')

  // calculate the segments
  const segments = get_fragments_from_options(options, r)

  // WHY IS OPENSCAD SO WEIRD?
  const center = [0, 0, 0]

  // determine options for JSCAD
  options = { radius: r, center, segments }

  return primitives.sphere(options)
}

module.exports = sphere
