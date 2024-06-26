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
  checkOptions(options, ['v']) // allow named options, with v option

  const defaults = {
    v: [1, 1, 1]
  }
  let { v } = Object.assign({}, defaults, options)

  // convert scalar size to array
  if (Number.isFinite(v)) {
    v = [v, v, v]
  }

  if (!isNumberArray(v, 2)) throw new Error('v must be an array of factors')

  return transforms.scale(v, elements)
}

module.exports = scale
