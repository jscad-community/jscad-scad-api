const { transforms, measurements } = require('@jscad/modeling')

const { checkOptions, isNumberArray } = require('./commonChecks')

/**
 * Modifies the dimensions of the element to match the new size.
 *
 * If auto resizing is enabled then each zero(0) size will be taken from the first non-zero size.
 *
 * @param {Object} options - options for resizing
 * @param {Float|Array} options.newsize - either single number or an array of numbers, specifying the new sizes
 * @param {Array} [options.auto] - an array of true / false values, specifying if autosizing should occur
 * @param {Object} element - the element to resize
 * @return {Object} the resized element
 *
 * @example
 * let resized1 = resize({newsize=[5,5], square()) // resize 2D element
 * let resized2 = resize({newsize=[5,5,5], cube())
 * let resized3 = resize({newsize=[5,0,0], auto: [false, true, false], cube())
 */
const resize = (options, element) => {
  // check the options
  checkOptions(options, []) // allow named parameters, with defaults

  const defaults = {
    newsize: null,
    auto: [false, false, false]
  }
  let { newsize, auto } = Object.assign({}, defaults, options)

  // return original if newsize is missing
  if (!newsize) return element

  // perform checks on options
  if (!isNumberArray(options.newsize, 1)) throw new Error('newsize must be an array of sizes')
  if (!Array.isArray(auto)) throw new Error('auto must be an array of true or false')

  while (auto.length < 3) auto.push(false)

  // convert 2D sizes to 3D sizes
  newsize = options.newsize.slice()
  while (newsize.length < 3) newsize.push(0)

  // determine the newsize if auto enabled
  let autosize = newsize[0]
  if (autosize === 0) autosize = newsize[1]
  if (autosize === 0) autosize = newsize[2]

  if (auto[0] && newsize[0] === 0) newsize[0] = autosize
  if (auto[1] && newsize[1] === 0) newsize[1] = autosize
  if (auto[2] && newsize[2] === 0) newsize[2] = autosize

  // calculate scales to achieve the new sizes
  const scales = [1, 1, 1]
  const dimensions = measurements.measureDimensions(element)

  if (newsize[0] > 0 && dimensions[0] > 0) {
    scales[0] = newsize[0] / dimensions[0]
  }

  if (newsize[1] > 0 && dimensions[1] > 0) {
    scales[1] = newsize[1] / dimensions[1]
  }

  if (newsize[2] > 0 && dimensions[2] > 0) {
    scales[2] = newsize[2] / dimensions[2]
  }

  return transforms.scale(scales, element)
}

module.exports = resize
