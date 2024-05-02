const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { square } = require('../src/index.js')

test('square (defaults)', (t) => {
  const obs = square()

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 1)
})

test('square (options)', (t) => {
  let obs = square({ size: 5 })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 25)

  obs = square({ size: [3, 3] })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 9)

  obs = square({ size: [4, 4], center: true })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 16)
})
