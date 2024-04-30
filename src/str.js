const { utils } = require('@jscad/modeling')

/**
 * Convert all arguments to strings and concatenated.
 *
 * NOTE: Arguments are concatenated as given, no spaces added.
 *
 */
const str = (...contents) => contents.join('')

const chr = (...codepoints) => {
  codepoints = utils.flatten(codepoints)
  return String.fromCodePoint(...codepoints)
}

const ord = (str) => {
  return str.charCodeAt(0)
}

module.exports = { str, chr, ord }
