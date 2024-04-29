const { transforms } = require('@jscad/modeling')

const { checkOptions, isNumberArray } = require('./commonChecks.js')

/**
 * Scale the elements using the specified vector.
 *
 * @param {Object} options - options for centering
 * @param {Array} options.v - a vector that defines the factors of scale
 * @param {...Object} elements - the elements to scale
 * @return {Object|Array} the scaled element, or a list of scaled elements
 *
 * @example
 * let scaled1 = scale({v: [10, 2]}, square()) // scale 2D element
 * let scaled2 = scale({v: [10, 2, 3]}, sphere())
 */
const scale = (options, ...elements) => {
  // check the options
  checkOptions(options, ['v'])
  if (!isNumberArray(options.v, 1)) throw new Error('vector must be an array of factors')

  return transforms.scale(options.v, elements)
}

module.exports = scale
