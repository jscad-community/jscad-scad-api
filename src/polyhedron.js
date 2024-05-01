const { primitives } = require('@jscad/modeling')

const { checkOptions } = require('./commonChecks')

/**
 * Create a mulitple faceted polyhedron from a list of points and faces.
 *
 * Each face is a list containing the indices of three or more points from the points.
 * Faces may be defined in any order. Define enough faces to fully enclose the solid, with no overlap.
 *
 * @param {Object} [options] - options for construction
 * @param {Array} [options.points] - array of points (X, Y, Z) of which to construct the polyhedron
 * @param {Array} [options.faces] - array of faces, where each face contains three or more indices
 * @returns {Geom3} new 3D geometry
 *
 * @example
 * const polyhedron1 = polyhedron({
 *   points: [ [10,10,0], [10,-10,0], [-10,-10,0], [-10,10,0], // the four points at base
 *             [0,0,10] ],                                     // the apex point
 *   faces: [ [0,1,4], [1,2,4], [2,3,4], [3,0,4],              // each triangle side
 *            [1,0,3], [2,1,3] ]                               // two triangles for square base
 * })
 */
const polyhedron = (options) => {
  // check the options
  checkOptions(options, []) // allow named options, with various combinations

  const defaults = {
    points: [],
    faces: []
  }
  const { points, faces } = Object.assign({}, defaults, options)

  if (!Array.isArray(points)) throw new Error('points must be an array of x,y,z vertices')
  if (!Array.isArray(faces)) throw new Error('faces must be an array of indexes')

  // determine the options for JSCAD
  // NOTE: SCAD defines faces that wind clockwise about the normal, opposite of JSCAD.
  options = { points, faces, orientation: 'inward' }

  return primitives.polyhedron(options)
}

module.exports = polyhedron
