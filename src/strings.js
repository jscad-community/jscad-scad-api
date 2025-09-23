import { utils } from '@jscad/modeling'

/**
 * Convert all arguments to strings and concatenated.
 *
 * NOTE: Arguments are concatenated as given, no spaces added.
 *
 */
export const str = (...contents) => contents.join('')

export const chr = (...codepoints) => {
  codepoints = utils.flatten(codepoints)
  return String.fromCodePoint(...codepoints)
}

export const ord = (str) => str.charCodeAt(0)

