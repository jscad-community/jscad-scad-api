/**
 *
 * This packages provides a OpenSCAD-like API. See [OpenSCAD User Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)
 * 
 * This allows OpenSCAD designs to be ported to JSCAD, and gives OpenSCAD designers a slightly easier learning experience.
 * However, OpenSCAD designs still need to be converted to JSCAD (and JavaScript).
 * 
 * ## Usage
 * 
 * This package can be used by any JSCAD design by importing the required functions.
 *
 * ```
 * import {circle, rotate_extrude, linear_extrude, translate} from "jscad-scad-api"
 *
 * export const main = (params) => {
 *   let s1 = circle()
 *   let s2 = translate({v: [3, 3]}, s1)
 * 
 *   let s3 = rotate_extrude({fn: 8, angle: -270}, s2)
 * 
 *   return [s1, s2, s3]
 * }
 * ```
 * 
 * ## Implementation Notes
 * 
 * OpenSCAD is based on some bazzare non-procedural language, while JSCAD is 100% JavaScript.
 * A lot of language constructs are the same but there will be some pain, and learning required.
 * 
 * This package doesn't try to reproduce OpenSCAD, but does provide most of the functionality found in OpenSCAD.
 * The main difference is that the 'named' parameters are required. This shouldn't be hard but OpenSCAD designs may need some changes.
 * For example, OpenSCAD translate([1,2,3]) needs to be changed to translate(v=[1,2,3])
 * 
 * ### 2D Objects
 * 
 * | Shape   | Parameters    | Notes       |
 * | ------- | ------------- | ----------- |
 * | circle  | r, d          |             |
 * | polygon | points, paths |             |
 * | square  | size, center  |             |
 * | text    |               | UNSUPPORTED |
 * 
 * NOTE: JSCAD also supports arc, ellipse, line, roundedRectangle, star, and triangle.
 *
 * ### 3D Objects
 * 
 * | Shape      | Parameters                      | Notes       |
 * | ---------- | ------------------------------- | ----------- |
 * | cube       | size, center                    |             |
 * | sphere     | r, d                            |             |
 * | cylinder   | h, r, r1, r2, d, d1, d2, center |             |
 * | polyhedron | points, faces                   |             |
 * | surface    |                                 | UNSUPPORTED |
 * 
 * NOTE: JSCAD also supports cylinderElliptic, ellipsoid, geodesicSphere, roundedCuboid, and torus.
 * 
 * ### Transforms
 * 
 * | Function       | Parameters        | Notes       |
 * | -------------- | ----------------- | ----------- |
 * | color          | c                 |             |
 * | rotate         | a, v              |             |
 * | translate      | v                 |             |
 * | mirror         | v                 |             |
 * | multmatrix     | m                 |             |
 * | scale          | v                 |             |
 * | resize         | newsize, auto     |             |
 * | offset         | r, delta, chamfer |             |
 * | minkowski      |                   |             |
 * | hull           |                   |             |
 * 
 * NOTE: JSCAD also supports align and center.
 * 
 * ### Measurements
 * 
 * No such thing in OpenSCAD.
 * 
 * NOTE: JSCAD supports measurements of area, bounding box, bounding sphere, center, center of mass, dimensions, and volume.
 * 
 * ### Dimension Changes 2D/3D
 * 
 * | Function       | Parameters                              | Notes       |
 * | -------------- | --------------------------------------- | ----------- |
 * | projection     | cut                                     |             |
 * | linear_extrude | height, v, center, twist, slices, scale |             |
 * | rotate_extrude | angle                                   |             |
 * 
 * NOTE: JSCAD also supports extrudeHelical and extrudeRectangular.
 *
 * ### Boolean Combinations
 * 
 * | Function     | Parameters | Notes |
 * | ------------ | ---------- | ----- |
 * | union        |            |       |
 * | difference   |            |       |
 * | intersection |            |       |
 * 
 * NOTE: JSCAD also supports scission.
 * 
 * ### Mathematical Functions
 * - cos
 * - sin
 * - tan
 * - acos
 * - asin
 * - atan
 * - atan2
 * - abs
 * - ceil
 * - concat
 * - cross
 * - exp
 * - floor
 * - ln
 * - len
 * - log
 * - lookup
 * - max
 * - min
 * - norm
 * - pow
 * - rands
 * - round
 * - sign
 * - sqrt
 * 
 * ### String Functions
 * 
 * | Function | Parameters | Notes |
 * | -------- | ---------- | ----- |
 * | str      | ...values  |   |
 * | chr      | number     |   |
 * | ord      | string     |   |
 *
 * ### String Functions
 * 
 * | Function | Parameters | Notes |
 * | -------- | ---------- | ----- |
 * | str      | ...values  |   |
 * | chr      | number     |   |
 * | ord      | string     |   |
 * 
 * ### Type Test Functions
 * 
 * | Function  | Parameters | Notes |
 * | --------- | ---------- | ----- |
 * | is_undef  | value      |   |
 * | is_bool   | value      |   |
 * | is_num    | value      |   |
 * | is_string | value      |   |
 * | is_list   | value      |   |
 * 
 * ### Language Features
 * 
 * | Function    | Parameters | Notes |
 * | ----------- | ---------- | ----- |
 * | assert      | ...values  |  |
 * | echo        | ...values  |  |
 * | search      |            | UNSUPPORTED |
 * | version     |            |  |
 * | version_num |            |  |
 * 
 * If you don't see a function above then it's not supported, or the JavaScript language may have the same construct.
 * 
 * @module jscad-scad-api
 */

// globals
export { $fn, $fs, $fa } from './globals.js'

// primitives
export { circle } from './circle.js'
export { cube } from './cube.js'
export { cylinder } from './cylinder.js'
export { polygon } from './polygon.js'
export { polyhedron } from './polyhedron.js'
export { sphere } from './sphere.js'
export { square } from './square.js'

// transforms
export { color } from './color.js'
export { hull } from './hull.js'
export { mirror } from './mirror.js'
export { multmatrix } from './multmatrix.js'
export { offset } from './offset.js'
export { resize } from './resize.js'
export { rotate } from './rotate.js'
export { scale } from './scale.js'
export { translate } from './translate.js'

// operations
export { linear_extrude } from './linear_extrude.js'
export { rotate_extrude } from './rotate_extrude.js'

// booleans
export { difference } from './difference.js'
export { intersection } from './intersection.js'
export { union } from './union.js'
export { minkowski } from './minkowski.js'

// string functions
export { str, chr, ord } from './strings.js'

// trigonometric functions
export { cos, sin, tan, acos, asin, atan, atan2 } from './maths.js'

// other math functions
export { abs, ceil, concat, cross, exp, floor, ln, len, log, lookup, max, min, norm, pow, rands, round, sign, sqrt } from './maths.js'

// test functions
export { is_undef, is_bool, is_function, is_list, is_num, is_string } from './tests.js'

// language features
export { children, $children } from './children.js'
export { assert, echo, render, version, version_num } from './features.js'
export { range } from './range.js'

// runtime features
export { action } from './action.js'
export { forAction, forUnion } from './forAction.js'
