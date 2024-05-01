const is_bool = (value) => (typeof value === 'boolean')

const is_function = (value) => (typeof value === 'function')

const is_list = (value) => Array.isArray(value)

const is_num = (value) => (typeof value === 'number' && value !== Math.NaN)

const is_string = (value) => (typeof value === 'string')

/**
 * Determine if the give value is undefined.
 *
 * @param {Any} value - value to test
 * @return {Boolean} true if the given value is null or undefined
 *
 * @example
 */
const is_undef = (value) => (value === null || value === undefined)

module.exports = {
  is_bool,
  is_function,
  is_list,
  is_num,
  is_string,
  is_undef
}
