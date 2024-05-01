const { booleans } = require('@jscad/modeling')

/**
 * Creates the intersection all elements (logical AND).
 * Only the area which is common or shared by all children is retained.
 *
 * NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.
 *
 * @param {...Object} elements - the elements to intersect
 * @return {Object} the intersection of the elements
 *
 * @example
 * let newshape = intersection(sphere(), cube())
 */
const intersection = (...elements) => booleans.intersect(elements)

module.exports = intersection
