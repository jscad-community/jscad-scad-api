import test from 'ava'

import { geometries, measurements } from '@jscad/modeling'

import { square, cube, difference, translate } from '../src/index.js'

test('difference (2D and 3D objects)', (t) => {
  let obs = difference(square({ size: 3 }), translate({ v: [1, 1] }, square({ size: 3 })))

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 5)

  // scale 3D object
  obs = difference(cube({ size: 3 }), translate({ v: [1, 1, 1] }, cube({ size: 3 })))

  t.true(geometries.geom3.isA(obs))
  // t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 19.0)
})
