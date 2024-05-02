const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { square, cube, rotate } = require('../src/index.js')

test('rotate (options)', (t) => {
  // rotate 2D object
  let obs = rotate({ a: 45 }, square({ size: [2, 3] }))

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 6.0)

  // rotate 3D object
  obs = rotate({ a: [45, -45, 90] }, cube({ size: [2, 3, 5] }))

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 30.0)

  obs = rotate({ a: [45, -45, 90], v: [0, 1, 0] }, cube({ size: [2, 3, 5] }))

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 30.0)
})
