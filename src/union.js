const { booleans } = require('@jscad/modeling')

/**
 * Creates a union of all elements (logical OR). This is the sum of all elements.
 *
 * NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.
 *
 * @param {...Object} elements - the elements to union
 * @return {Object} the union of the elements
 *
 * @example
 * let newshape = union(sphere(), cube())
 */
const union = (...elements) => booleans.union(elements)

module.exports = union
