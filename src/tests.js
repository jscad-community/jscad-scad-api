export const is_bool = (value) => (typeof value === 'boolean')

export const is_function = (value) => (typeof value === 'function')

export const is_list = (value) => Array.isArray(value)

export const is_num = (value) => (typeof value === 'number' && value !== Math.NaN)

export const is_string = (value) => (typeof value === 'string')

/**
 * Determine if the give value is undefined.
 *
 * @param {Any} value - value to test
 * @return {Boolean} true if the given value is null or undefined
 *
 * @example
 */
export const is_undef = (value) => (value === null || value === undefined)
