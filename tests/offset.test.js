import test from 'ava'

import { geometries, measurements } from '@jscad/modeling'

import { square, offset } from '../src/index.js'

test('offset (defaults)', (t) => {
  // offset 2D object
  const obs = offset({}, square())

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 9)
})

test('offset (options)', (t) => {
  // offset 2D object
  let obs = offset({ r: 3 }, square({ size: 5 }))

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 110.4558441227157)

  obs = offset({ delta: 3, chamfer: true }, square({ size: 5 }))

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 103)
})
