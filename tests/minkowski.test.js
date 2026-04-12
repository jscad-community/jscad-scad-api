import test from 'ava'

import { geom3, measureVolume } from '@jscad/modeling'

import { cube, sphere, minkowski } from '../src/index.js'

test('minkowski (3D objects)', (t) => {
  let obs = minkowski(cube({ size: 5 }), sphere({ r: 1 }))

  t.true(geom3.isA(obs))
  t.notThrows(() => geom3.validate(obs))
  t.is(measureVolume(obs), 299.8072014564723)
})
