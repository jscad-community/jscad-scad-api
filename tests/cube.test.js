const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { cube } = require('../src/index.js')

test('cube (defaults)', (t) => {
  const obs = cube()

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 1)
})

test('cube (options)', (t) => {
  let obs = cube({ size: 5 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 125)

  obs = cube({ size: [3, 3, 3] })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 27)

  obs = cube({ size: [4, 4, 4], center: false })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 64)
})
