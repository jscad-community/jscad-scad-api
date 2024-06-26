const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { cylinder } = require('../src/index.js')

test('cylinder (defaults)', (t) => {
  const obs = cylinder()

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 2.377641290737884)
})

test('cylinder (options)', (t) => {
  // using radius
  let obs = cylinder({ r: 3 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 26.45033635316129)

  obs = cylinder({ h: 10, r1: 1, r2: 3 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 127.35347133003584)

  // using diameters
  obs = cylinder({ d: 6, center: true })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 26.45033635316128706807826039752)

  obs = cylinder({ h: 10, d1: 2, d2: 6, center: true })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 127.3534713300358)

  // using F parameters
  obs = cylinder({ r: 3, $fn: 8 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 25.455844122715707)

  obs = cylinder({ r: 3, $fa: 36 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 26.45033635316129)

  obs = cylinder({ r: 3, $fs: 0.2, $fa: 3 })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 28.25372479923655)
})
