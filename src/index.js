const { $fn, $fs, $fa } = require('./globals.js')

const circle = require('./circle.js')
const cube = require('./cube.js')
const cylinder = require('./cylinder.js')
const polygon = require('./polygon.js')
const polyhedron = require('./polyhedron.js')
const sphere = require('./sphere.js')
const square = require('./square.js')

const color = require('./color.js')
const mirror = require('./mirror.js')
const multmatrix = require('./multmatrix.js')
const offset = require('./offset.js')
const resize = require('./resize.js')
const rotate = require('./rotate.js')
const scale = require('./scale.js')
const translate = require('./translate.js')

const linear_extrude = require("./linear_extrude.js")
const rotate_extrude = require("./rotate_extrude.js")

const assert = require('./assert.js')
const echo = require('./echo.js')
const str = require('./str.js')
const {cos, sin, tan, acos, asin, atan, atan2} = require('./maths.js')
const {abs, ceil, concat, cross, exp, floor, ln, len, log, lookup, max, min, norm, pow, rands, round, sign, sqrt} = require('./maths.js')

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

  // trigonometric functions
  cos,
  sin,
  tan,
  acos,
  asin,
  atan,
  atan2,

  // other functions
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

  // utilities
  assert,
  echo,
  str
}
