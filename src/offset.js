const { expansions } = require('@jscad/modeling')

const { checkOptions } = require('./commonChecks.js')
const { get_fragments_from_options } = require('./globals.js')

/**
 * Offset generates a new interior or exterior outline from an existing element.
 *
 * There are two modes of operation; radial and offset.
 * The radial method creates a new outline as if a circle of some radius is rotated around the exterior (r>0) or interior (r<0) original outline.
 * The offset method creates a new outline whose sides are a fixed distance outer (delta > 0) or inner (delta < 0) from the original outline.
 *
 * If used, $fa, $fs and $fn must be named parameters.
 *
 * @param {Object} [options] - options for centering
 * @param {Float} [options.r] - the radius of the circle that is rotated about the outline
 * @param {Boolean} [options.delta=1] - the distance of the new outline from the original outline
 * @param {Boolean} [options.chamfer=false] - defines if edges should be chamfered (delta mode only)
 * @param {...Object} elements - the elements to offset
 * @return {Object|Array} the offset element, or a list of offset elements
 *
 * @example
 */
const offset = (options, ...elements) => {
  // check the options
  options = checkOptions(options, []) // allow named options, with various options

  const defaults = {
    r: 0,
    delta: 1,
    chamfer: false
  }
  let { r, delta, chamfer } = Object.assign({}, defaults, options)

  // calculate the segments
  let segments = 0
  if (r === 0) {
    // use delta for offset
    segments = 16
  } else {
    // use r for offset, and calculate segments
    segments = get_fragments_from_options(options, Math.abs(r))
  }

  // determine the delta and the type of corners
  let corners = 'edge'
  if (r !== 0) {
    delta = r
    corners = 'round'
  } else {
    if (chamfer) {
      corners = 'chamfer'
    }
  }

  options = {
    delta,
    corners,
    segments
  }

  return expansions.offset(options, elements)
}

module.exports = offset
