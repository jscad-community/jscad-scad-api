/**
 * Assert that the result is true.
 *
 * If not then an error with the given message is thrown, and processing stops.
 */
const assert = (result, message) => {
  if (result) return
  throw new Error(message)
}

module.exports = assert
