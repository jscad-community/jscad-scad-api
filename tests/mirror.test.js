const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { square, cube, mirror } = require('../src/index.js')

test('mirror (options)', (t) => {
  // mirror 2D object
  let shape = square({ size: [2, 3] })
  let obs = mirror({ v: [1, 0, 0] }, shape)

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), -6.0)

  // mirror 3D object
  shape = cube({ size: [2, 3, 5] })
  obs = mirror({ v: [0, 0, 1] }, shape)

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 30.0)
})
