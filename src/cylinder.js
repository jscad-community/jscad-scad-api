const { primitives } = require('@jscad/modeling')

const { checkOptions } = require('./commonChecks')
const { get_fragments_from_options } = require('./globals.js')

/**
 * Creates a cylinder centered vertically about the Z axis.
 *
 * When center is true, it is also centered vertically along the Z axis.
 *
 * If used, $fa, $fs and $fn must be named parameters.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.h=1] - height of the cylinder
 * @param {Float} [options.r1=1] - radius of the top of the cylinder
 * @param {Float} [options.r2=1] - radius of the bottom of the cylinder
 * @param {Float} [options.r=0] - if provided, r = r1 = r2
 * @param {Float} [options.d=0] - if provided, diameter of the cylinder, d = r1 * 2 = r2 * 2
 * @param {Float} [options.d1=0] - if provided, diameter of the top of the cylinder, d1 = r1 * 2
 * @param {Float} [options.d2=0] - if provided, diameter of the bottom of the cylinder, d2 = r2 * 2
 * @param {Boolean} [options.center=false] - wether to center the cylinder about Z axis or not
 * @returns {Geom3} new 3D geometry
 *
 * @example
 * let cylinder1 = cylinder({r: 10})
 * let cylinder2 = cylinder({d: 20})
 * let cylinder3 = cylinder({h: 10, r1: 10, r2: 5})
 * let cylinder4 = cylinder({h: 10, d1: 20, d2: 10})
 * let cylinder5 = cylinder({h: 10, r1: 10, r2: 0, $fn: 32})
 */
const cylinder = (options) => {
  // check the options
  options = checkOptions(options, false) // allow default options

  const defaults = {
    h: 1,
    r1: 1,
    r2: 1,
    r: 0,
    d: 0,
    d1: 0,
    d2: 0,
    center: false
  }
  let { h, r1, r2, r, d, d1, d2, center } = Object.assign({}, defaults, options)

  // convert diameter to radius
  if (d1 > 0) {
    r1 = d1 / 2
  }
  if (d2 > 0) {
    r2 = d2 / 2
  }
  if (d > 0) {
    r = d / 2
  }

  // convert scalar radius to start / end radius
  if (r > 0) {
    r1 = r
    r2 = r
  }

  // WHY IS OPENSCAD SO WEIRD?
  const offset = [0, 0, h / 2]
  if (center) {
    offset[2] = 0
  }

  // calculate the segments
  r = r1 > r2 ? r1 : r2 // use the largest radius
  const segments = get_fragments_from_options(options, r)

  // determine the options for JSCAD
  options = {
    height: h,
    startRadius: [r1, r1],
    endRadius: [r2, r2],
    center: offset,
    segments
  }

  return primitives.cylinderElliptic(options)
}

module.exports = cylinder
