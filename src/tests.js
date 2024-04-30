const is_bool = (value) => {
  return ("boolean" == typeof value)
}

const is_function = (value) => {
  return ("function" == typeof value)
}

const is_list = (value) => {
  return Array.isArray(value)
}

const is_num = (value) => {
  return ("number" == typeof value && value != Math.NaN)
}

const is_string = (value) => {
  return ("string" == typeof value)
}

/**
 * Determine if the give value is undefined.
 *
 * @param {Any} value - value to test
 * @return {Boolean} true if the given value is null or undefined
 *
 * @example
 * let scaled1 = scale({v: [10, 2]}, square()) // scale 2D element
 * let scaled2 = scale({v: [10, 2, 3]}, sphere())
 */
const is_undef = (value) => {
  return (value === null || value === undefined)
}

module.exports = {
  is_bool,
  is_function,
  is_list,
  is_num,
  is_string,
  is_undef,
}
