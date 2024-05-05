const { colors } = require('@jscad/modeling')

const { checkOptions } = require('./commonChecks')

/**
 * Displays the elements using the specified RGB color.
 *
 * The color is specfified using RGBA values from 0 to 1.
 * The alpha value defaults to 1.0 (opaque) if not specified.
 *
 * The color can also be defined by name (case insensitive).
 *
 * @param {Object} color - either an array or a hex string of color values
 * @param {...Object} elements - the elements to color
 * @return {Object|Array} the colored element, or a list of colored elements
 *
 * @example
 * let color1 = color([1,0,0,1], sphere())
 * let color2 = color("red", sphere())
 */
const color = (options, ...elements) => {
  checkOptions(options, ['c'])

  const defaults = {
    c: null, // no color change
    alpha: 1.0
  }
  const { c, alpha } = Object.assign({ }, defaults, options)

  // convert options to RGB color and alpha
  let rgb = null

  if (Array.isArray(c)) {
    rgb = c.slice()
  }

  if (typeof c === 'string') {
    rgb = colors.colorNameToRgb(c)
    if (!rgb) {
      // not a color name so try CSS color notation
      rgb = colors.hexToRgb(c)
    }
  }

  if (!rgb) return elements

  if (rgb.length < 4) rgb.push(alpha)

  return colors.colorize(rgb, elements)
}

module.exports = color
