const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { square, cube, scale, translate } = require('../src/index.js')

test('scale (options)', (t) => {
  // scale 2D object
  let shape = translate({v: [3, 3]}, square({ size: [1, 3] }))
  let obs = scale({ v: 2 }, shape)

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 12.0)

  // scale 3D object
  shape = translate({v: [3, 3, 3]}, cube({size: [1, 3, 5]}))
  obs = scale({ v: [3, 3, 3] }, shape)

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 405)
})
