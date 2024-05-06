const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { circle } = require('../src/index.js')

test('circle (defaults)', (t) => {
  const obs = circle()

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 2.377641290737884)
})

test('circle (options)', (t) => {
  // using radius
  let obs = circle({ r: 3 })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 26.450336353161287)

  // using diameter
  obs = circle({ d: 6 })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 26.450336353161287)

  // using F parameters
  obs = circle({ r: 5, $fn: 8 })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 70.71067811865476)

  obs = circle({ r: 5, $fa: 36 })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 73.47315653655915)

  obs = circle({ r: 5, $fs: 0.5, $fa: 3 })

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 78.40967919420565)
})
