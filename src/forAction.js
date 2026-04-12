import { flatten } from '@jscad/modeling'

/**
 * Evaluate each value in a set of vectors, or each name in the attributes,
 * applying it to the given function.
 *
 * This is bascially a replacement for the SCAD for-loop.
 *
 * @param {Object} where each attribute has a list of values
 * @param {Function} function (call-back) of which to execution for each value
 * @returns Array of new geometry, i.e. what every is produced from the given function.
 */
export const forAction = (attributes, func) => {
  const accum = []
  // FIXME add support for multiple attributes
  for (const an in attributes) {
    const objects = attributes[an].map((v) => func(v))
    accum.push(...objects)
  }
  return flatten(accum)
}
