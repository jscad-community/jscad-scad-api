/*
 * OpenSCAD Language Features
 */

/**
 * Assert that the result is true.
 *
 * If not then an error with the given message is thrown, and processing stops.
 * @alias module:jscad-scad-api.assert
 */
export const assert = (result, message = '') => {
  if (result) return
  throw new Error(message)
}

/**
 * Echo (print) the contents to the console, which is useful for debugging code.
 *
 * @See str()
 * @alias module:jscad-scad-api.echo
 */
export const echo = (...contents) => console.log(...contents)

/**
 * Return the version as a vector of three numbers.
 *
 * @alias module:jscad-scad-api.version
 */
export const version = () => [2024, 4, 1]

/**
 * Return the version as a number, e.g. 20240401.
 *
 * @alias module:jscad-scad-api.version_num
 */
export const version_num = () => 20240401
