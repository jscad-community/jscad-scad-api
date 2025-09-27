import { subtract } from '@jscad/modeling'

/**
 * Subtracts all elements from the first element (logical AND NOT).
 *
 * NOTE: The given elements should be of the same type, i.e. 2D or 3D elements.
 *
 * @param {...Object} elements - the elements to subtract from the first
 * @return {Object} the difference of the elements
 *
 * @example
 * let newshape = difference(sphere(), cube())
 */
export const difference = (...elements) => subtract(elements)
