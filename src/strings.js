import { flatten } from '@jscad/modeling'

/**
 * Convert all arguments to strings and concatenated.
 *
 * NOTE: Arguments are concatenated as given, no spaces added.
 *
 * @alias module:jscad-scad-api.str
 */
export const str = (...contents) => contents.join('')

export const chr = (...codepoints) => {
  codepoints = flatten(codepoints)
  return String.fromCodePoint(...codepoints)
}

export const ord = (str) => str.charCodeAt(0)
