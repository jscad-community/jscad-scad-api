import { transforms } from '@jscad/modeling'

import { checkOptions, isNumberArray } from './commonChecks.js'

/**
 * Translate the elements along the specified vector.
 *
 * @param {Object} options - options for translating
 * @param {Array} [options.v=[0,0,0]] - a vector that defines the movement in position
 * @param {...Object} elements - the elements to translate
 * @return {Object|Array} the translated element, or a list of translated elements
 * @alias module:jscad-scad-api.translate
 *
 * @example
 * let moved1 = translate({v: [10, 2]}, square()) // translate 2D element
 * let moved2 = translate({v: [10, 2, 0]}, sphere())
 */
export const translate = (options, ...elements) => {
  // check the options
  checkOptions(options, ['v'])

  if (!isNumberArray(options.v, 2)) throw new Error('v must be an array of movements')

  return transforms.translate(options.v, elements)
}
