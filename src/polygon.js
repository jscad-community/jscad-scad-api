const { primitives } = require('@jscad/modeling')

const { checkOptions } = require('./commonChecks')

/**
 * Create a multiple sided shape from a list of coordinates (X, Y).
 *
 * This includes irregular shapes with both concave and convex edges.
 *
 * Construct a polygon either from arrays of paths and points, or just arrays of points
 * nested paths (multiple paths) and flat paths are supported.
 *
 * @param {Object} [options] - options for construction
 * @param {Array} [options.paths=[]] - paths of the polygon : either flat or nested array
 * @param {Array} [options.points=[]] - points of the polygon : either flat or nested array
 * @returns {Geom2} new 2D geometry
 *
 * @example
 * let poly1 = polygon({points: [[10,11], [0,11], [5,20]]})
 * let poly2 = polygon({points: [[10,11], [0,11], [5,20]], paths: [[0, 1, 2]]})
 */
const polygon = (options) => {
  // check the options
  checkOptions(options, []) // allow named options, with various combinations

  const defaults = {
    paths: [],
    points: []
  }
  const { paths, points } = Object.assign({}, defaults, options)

  if (!Array.isArray(points)) throw new Error('points must be an array of x,y points')

  // determine the options for JSCAD
  options = { paths, points }

  return primitives.polygon(options)
}

module.exports = polygon
