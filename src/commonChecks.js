// check that the options provided are proper; none or anonymous object
export const checkOptions = (options, required = null) => {
  // allow default options
  if (!required && options === undefined) return {}

  // allow options of any name
  if (!required && typeof options === 'object') return options

  // check that the required options are present
  if (typeof options === 'object') {
    let present = true
    required.forEach((r) => { present = present && Object.hasOwn(options, r) })
    if (present) return options
  }

  throw new Error('Invalid options; use named parameters; ' + required)
}

// verify that the array has the given dimension, and contains Number values
export const isNumberArray = (array, dimension) => {
  if (Array.isArray(array) && array.length >= dimension) {
    return array.every((n) => Number.isFinite(n))
  }
  return false
}

// verify that the value is a Number greater than the constant
export const isGT = (value, constant) => (Number.isFinite(value) && value > constant)

// verify that the value is a Number greater than or equal to the constant
export const isGTE = (value, constant) => (Number.isFinite(value) && value >= constant)
