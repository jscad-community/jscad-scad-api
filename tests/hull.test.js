const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { square, cube, hull, translate } = require('../src/index.js')

test('hull (2D and 3D objects)', (t) => {
  let obs = hull(square(), translate({ v: [3, 3] }, square()))

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 7)

  // scale 3D object
  obs = hull(cube(), translate({ v: [3, 3, 3] }, cube()))

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 10.0)
})
