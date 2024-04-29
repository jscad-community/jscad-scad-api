const { expansions } = require('@jscad/modeling')

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
 * @param {Boolean} [options.chamfer=true] - defines if edges should be chamfered
 * @param {Boolean} [options.delta] - the distance of the new outline from the original outline
 * @param {...Object} elements - the elements to offset
 * @return {Object|Array} the offset element, or a list of offset elements
 *
 * @example
 */
const offset = (options, ...elements) => {
  const defaults = {
    delta: 1,
    chamfer: true,
    r: 0
  }
  let { delta, chamfer, r } = Object.assign({}, defaults, options)

  // check the options

  // radial offset
  if (r !== 0) {
    return expansions.offset({ delta: r, corners: 'round' }, elements)
  }

  // delta offset
  const corners = chamfer ? 'chamfer' : 'edge'
  return expansions.offset({ delta, corners }, elements)
}

module.exports = offset
