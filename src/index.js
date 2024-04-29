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
  resize,
  rotate,
  scale,
  translate,

  // operations
  linear_extrude,
  rotate_extrude,

  // utilities
  assert,
  echo,
  str
}
