const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { sphere } = require('../src/index.js')

test('sphere (defaults)', (t) => {
  const obs = sphere()

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 4.118284167955647)
})

test('sphere (options)', (t) => {
  // using radius
  let obs = sphere({ r: 4 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 263.5701867491614)

  // using diameters
  obs = sphere({ d: 8 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 263.5701867491614)

  // using F parameters
  obs = sphere({ r: 3, fn: 8 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 86.91168824543139)

  obs = sphere({ r: 3, fa: 36 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 98.713999147284)

  obs = sphere({ r: 3, fs: 0.2 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 112.8939124097664)
})
