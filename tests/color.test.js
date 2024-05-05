const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { circle, cube, color } = require('../src/index.js')

test('color (options)', (t) => {
  // color 2D object
  let obs = color({ c: [1, 0, 0.5] }, circle())

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 3.1186753622663903)

  // color 3D object
  obs = color({ c: 'red' }, cube())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 1.0)
})
