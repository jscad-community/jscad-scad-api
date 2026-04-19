import { rectangle } from '@jscad/modeling'

import { checkOptions, isNumberArray } from './commonChecks.js'

/**
 * Creates a square or rectangle.
 *
 * When center is true the square is centered on the origin.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.size=[1,1]] - size of the square, either as array or scalar
 * @param {Boolean} [options.center=false] - wether to center the square/rectangle or not
 * @returns {Geom2} new 2D geometry
 * @alias module:jscad-scad-api.square
 *
 * @example
 * let square1 = square({size: [x, y], center: true})
 * let square2 = square({size: x})
 */
export const square = (options) => {
  // check the options
  checkOptions(options, false) // allow default options

  const defaults = {
    size: [1, 1],
    center: false
  }
  let { center, size } = Object.assign({}, defaults, options)

  // convert scalar size to array
  if (Number.isFinite(size)) {
    size = [size, size]
  }

  // check options
  if (!isNumberArray(size, 2)) throw new Error('size must be an array of factors')

  // calculate center of rectangle
  const offset = [0, 0]
  if (!center) {
    offset[0] = size[0] / 2
    offset[1] = size[1] / 2
  }

  // determine options for JSCAD
  options = { size, center: offset }

  return rectangle(options)
}
