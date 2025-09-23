import test from 'ava'

import { geometries, measurements } from '@jscad/modeling'

import { circle, cube, translate } from '../src/index.js'

test('translate (options)', (t) => {
  // translate 2D object
  let obs = translate({ v: [3, 3] }, circle())

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 2.377641290737884)

  // translate 3D object
  obs = translate({ v: [3, 3, 3] }, cube())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 0.9999999999999998)
})
