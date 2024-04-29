// check that the options provided are proper; none or anonymous object
const checkOptions = (options, required = null) => {
  // allow default options
  if (!required && options === undefined) return

  // allow options of any name
  if (!required && typeof options === 'object') return

  // check that the required options are present
  if (typeof options === 'object') {
    let present = true
    required.forEach((r) => { present = present && Object.hasOwn(options, r) })
    if (present) return
  }

  throw new Error('Invalid options; use named parameters; ' + required)
}

// verify that the array has the given dimension, and contains Number values
const isNumberArray = (array, dimension) => {
  if (Array.isArray(array) && array.length >= dimension) {
    return array.every((n) => Number.isFinite(n))
  }
  return false
}

// verify that the value is a Number greater than the constant
const isGT = (value, constant) => (Number.isFinite(value) && value > constant)

// verify that the value is a Number greater than or equal to the constant
const isGTE = (value, constant) => (Number.isFinite(value) && value >= constant)

module.exports = {
  checkOptions,
  isNumberArray,
  isGT,
  isGTE
}
