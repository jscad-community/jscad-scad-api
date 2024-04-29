const { primitives } = require('@jscad/modeling')

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
  const defaults = {
    paths: [],
    points: []
  }
  const { paths, points } = Object.assign({}, defaults, options)

  return primitives.polygon({ paths, points })
}

module.exports = polygon
