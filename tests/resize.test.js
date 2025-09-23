import test from 'ava'

import { geometries, measurements } from '@jscad/modeling'

import { circle, cube, resize } from '../src/index.js'

test('resize (defaults)', (t) => {
  const obs = resize({}, cube())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 1.0)
})

test('resize (options)', (t) => {
  // resize 2D object
  let obs = resize({ newsize: [3, 3], auto: [false] }, circle())

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 6.218847050625472)

  // resize 3D object
  obs = resize({ newsize: [3, 3, 3], auto: [true, false, false] }, cube())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 27.0)
})
