const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { square, offset } = require('../src/index.js')

test('offset (defaults)', (t) => {
  // offset 2D object
  const obs = offset({}, square())

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 9)
})

test('offset (options)', (t) => {
  // offset 2D object
  let obs = offset({ r: 3 }, square())

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 41.03763767849562)

  obs = offset({ delta: 3, chamfer: true }, square())

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 31.0)
})
