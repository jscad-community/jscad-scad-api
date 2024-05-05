const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { square, cube, mirror, translate } = require('../src/index.js')

test('mirror (options)', (t) => {
  // mirror 2D object
  let shape = translate({ v: [3, 3] }, square({ size: [1, 3] }))
  let obs = mirror({}, shape) // mirror about X axis

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.deepEqual(measurements.measureBoundingBox(obs), [[-4, 3, 0], [-3, 6, 0]])

  // mirror 3D object
  shape = translate({ v: [3, 3, 3] }, cube({ size: [1, 3, 5] }))
  obs = mirror({ v: [0, 0, 1] }, shape) // mirror about Z axix

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.deepEqual(measurements.measureBoundingBox(obs), [[3, 3, -8], [4, 6, -3]])
})
