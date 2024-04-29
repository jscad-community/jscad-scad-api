const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { polygon } = require('../src/index.js')

test('polygon (defaults)', (t) => {
  const obs = polygon()

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 0.0)
})

test('polygon (points)', (t) => {
  const obs = polygon({ points: [[0, 0], [3, 0], [3, 3]] })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 4.5)
})

test('polygon (object params, with custom paths)', (t) => {
  const obs = polygon({ points: [[0, 0], [100, 0], [0, 100], [10, 10], [80, 10], [10, 80]], paths: [[0, 1, 2], [3, 4, 5]] })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 7450)
})
