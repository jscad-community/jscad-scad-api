import { minkowskiSum } from '@jscad/modeling'

/**
 * Compute the Minkowski sum of two 3D geometries.
 *
 * NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.
 *
 * @param {...Object} elements - the elements to sum
 * @return {Object} the minkowski sum of the elements
 * @alias module:jscad-scad-api.minkowski
 *
 * @example
 * let newshape = minkowski(cube(), sphere())
 */
export const minkowski = (...elements) => minkowskiSum(elements)
