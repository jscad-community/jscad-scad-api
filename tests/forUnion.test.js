import test from 'ava'

import { geometries, measurements } from '@jscad/modeling'

import { square, cube, forUnion, translate } from '../src/index.js'

test('forUnion (2D and 3D objects)', (t) => {
  // forUnion with 2D objects
  const func2D = (i) => square({size: i})
  let obs = forUnion({i: [[1,100],[2,200],[300,3]]}, func2D)

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 1294)

  // forUnion with 3D objects
  const func3D = (i) => cube({size: i})
  obs = forUnion({i: [[1,10,100],[2,20,200],[300,30,3]]}, func3D)

  t.true(geometries.geom3.isA(obs))
  // t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 34880)
})
