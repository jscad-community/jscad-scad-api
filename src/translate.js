const { transforms } = require('@jscad/modeling')

const { checkOptions, isNumberArray } = require('./commonChecks.js')

/**
 * Translate the elements along the specified vector.
 *
 * @param {Object} options - options for translating
 * @param {Array} [options.v=[0,0,0]] - a vector that defines the movement in position
 * @param {...Object} elements - the elements to translate
 * @return {Object|Array} the translated element, or a list of translated elements
 *
 * @example
 * let moved1 = translate({v: [10, 2]}, square()) // translate 2D element
 * let moved2 = translate({v: [10, 2, 0]}, sphere())
 */
const translate = (options, ...elements) => {
  // check the options
  checkOptions(options, ['v'])

  if (!isNumberArray(options.v, 1)) throw new Error('vector must be an array of movements')

  return transforms.translate(options.v, elements)
}

module.exports = translate
