const { colors } = require('@jscad/modeling')

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
const color = (color, ...elements) => {
  let rgb = []

  if (Array.isArray(color)) {
    rgb = color.slice()
  }

  if (typeof color === 'string') {
    rgb = colors.colorNameToRgb(color)
    if (!rgb) {
      // not a color name so try CSS color notation
      rgb = colors.hexToRgb(color)
    }
  }

  return colors.colorize(rgb, elements)
}

module.exports = color
