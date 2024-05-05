const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { sphere } = require('../src/index.js')

test('sphere (defaults)', (t) => {
  const obs = sphere()

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 1.5850941938252558)
})

test('sphere (options)', (t) => {
  // using radius
  let obs = sphere({ r: 4 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 240.4993745470391)

  // using diameters
  obs = sphere({ d: 8 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 240.4993745470391)

  // using F parameters
  obs = sphere({ r: 3, fn: 8 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 98.713999147284)

  obs = sphere({ r: 3, fa: 36 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 98.713999147284)

  obs = sphere({ r: 5, fs: 0.2, fa: 3 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 490.82454863890973)
})
