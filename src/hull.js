const { hulls } = require('@jscad/modeling')

/**
 * Create a convex hull around the given elements.
 *
 * NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.
 *
 * @param {...Object} elements - the elements to hull
 * @return {Object} the convex hall of the elements
 *
 * @example
 * let hulled = hull(square(), circle())
 */
const hull = (...objects) => hulls.hull(objects)

module.exports = hull
