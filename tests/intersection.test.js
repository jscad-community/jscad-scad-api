const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { square, cube, intersection, translate } = require('../src/index.js')

test('intersection (2D and 3D objects)', (t) => {
  let obs = intersection(square({ size: 3 }), translate({ v: [1, 1] }, square({ size: 3 })))

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 4.0000000000000036)

  // scale 3D object
  obs = intersection(cube({ size: 3 }), translate({ v: [1, 1, 1] }, cube({ size: 3 })))

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 8.0)
})
