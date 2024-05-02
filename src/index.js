const { $fn, $fs, $fa } = require('./globals.js')

const circle = require('./circle.js')
const cube = require('./cube.js')
const cylinder = require('./cylinder.js')
const polygon = require('./polygon.js')
const polyhedron = require('./polyhedron.js')
const sphere = require('./sphere.js')
const square = require('./square.js')

const color = require('./color.js')
const hull = require('./hull.js')
const mirror = require('./mirror.js')
const multmatrix = require('./multmatrix.js')
const offset = require('./offset.js')
const resize = require('./resize.js')
const rotate = require('./rotate.js')
const scale = require('./scale.js')
const translate = require('./translate.js')

const linear_extrude = require('./linear_extrude.js')
const rotate_extrude = require('./rotate_extrude.js')

const difference = require("./difference.js")
const intersection = require("./intersection.js")
const union = require("./union.js")

const { str, chr, ord } = require('./strings.js')

const { cos, sin, tan, acos, asin, atan, atan2 } = require('./maths.js')
const { abs, ceil, concat, cross, exp, floor, ln, len, log, lookup, max, min, norm, pow, rands, round, sign, sqrt } = require('./maths.js')

const { is_undef, is_bool, is_function, is_list, is_num, is_string } = require('./tests.js')

const { assert, echo, version, version_num } = require('./features.js')

module.exports = {
  // globals
  $fn,
  $fs,
  $fa,

  // primitives
  circle,
  cube,
  cylinder,
  polygon,
  polyhedron,
  sphere,
  square,

  // transforms
  color,
  hull,
  mirror,
  multmatrix,
  offset,
  resize,
  rotate,
  scale,
  translate,

  // operations
  linear_extrude,
  rotate_extrude,

  // booleans
  difference,
  intersection,
  union,

  // trigonometric functions
  cos,
  sin,
  tan,
  acos,
  asin,
  atan,
  atan2,

  // other math functions
  abs,
  ceil,
  concat,
  cross,
  exp,
  floor,
  ln,
  len,
  log,
  lookup,
  max,
  min,
  norm,
  pow,
  rands,
  round,
  sign,
  sqrt,

  // string functions
  str,
  chr,
  ord,

  // test functions
  is_bool,
  is_function,
  is_list,
  is_num,
  is_string,
  is_undef,

  // language features
  assert,
  echo,
  version,
  version_num
}
