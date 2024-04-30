const { expansions, utils } = require('@jscad/modeling')

const { checkOptions, isNumberArray } = require('./commonChecks.js')

/**
 * Offset generates a new interior or exterior outline from an existing element.
 *
 * There are two modes of operation; radial and offset.
 * The radial method creates a new outline as if a circle of some radius is rotated around the exterior (r>0) or interior (r<0) original outline. 
 * The offset method creates a new outline whose sides are a fixed distance outer (delta > 0) or inner (delta < 0) from the original outline.
 *
 * @param {Object} [options] - options for centering
 * @param {Float} [options.r] - the radius of the circle that is rotated about the outline
 * @param {Boolean} [options.delta=1] - the distance of the new outline from the original outline
 * @param {Boolean} [options.chamfer=false] - defines if edges should be chamfered (delta mode only)
 * @param {Integer} [options.fa=12] - minimum angle (in degrees) of each fragment
 * @param {Integer} [options.fs=2] - minimum circumferential length of each fragment
 * @param {Integer} [options.fn=0] - if provided, number of fragments in 360 degrees
 * @param {...Object} elements - the elements to offset
 * @return {Object|Array} the offset element, or a list of offset elements
 *
 * @example
 */
const offset = (options, ...elements) => {
  // check the options
  checkOptions(options, []) // allow named options with defaults

  const defaults = {
    r: 0,
    delta: 1,
    chamfer: false,
    fa: 12,
    fs: 2,
    fn: 0,
  }
  let { delta, chamfer, r, fa, fs, fn } = Object.assign({}, defaults, options)

  // calculate the segments
  let segments = fn
  if (fn <= 0) {
    if (r === 0) {
      segments = 16
    } else {
      const minLength = fs
      const minAngle = utils.degToRad(fa)
      segments = utils.radiusToSegments(Math.abs(r), minLength, minAngle)
    }
  }

  // determine the delta and the type of corners
  let corners = "edge"
  if (r !== 0) {
    delta = r
    corners = "round"
  } else {
    if (chamfer) {
      corners = "chamfer"
    }
  }

  options = {
    delta,
    corners,
    segments,
  }

  return expansions.offset(options, elements)
}

module.exports = offset
