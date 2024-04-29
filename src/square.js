const { primitives } = require('@jscad/modeling')

/**
 * Creates a square or rectangle.
 *
 * When center is true the square is centered on the origin.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.size=[1,1]] - size of the square, either as array or scalar
 * @param {Boolean} [options.center=false] - wether to center the square/rectangle or not
 * @returns {Geom2} new 2D geometry
 *
 * @example
 * let square1 = square({size: [x, y], center: true})
 * let square2 = square({size: x})
 */
const square = (options) => {
  const defaults = {
    size: [1, 1],
    center: false
  }
  let { center, size } = Object.assign({}, defaults, options)

  // convert scalar size to array
  if (Number.isFinite(size)) {
    size = [size, size]
  }

  // calculate center of rectangle
  const offset = [0, 0]
  if (!center) {
    offset[0] = size[0] / 2
    offset[1] = size[1] / 2
  }

  return primitives.rectangle({ size, center: offset })
}

module.exports = square
