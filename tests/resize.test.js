const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { circle, cube, resize } = require('../src/index.js')

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
  t.is(measurements.measureArea(obs), 7.055671270566608)

  // resize 3D object
  obs = resize({ newsize: [3, 3, 3], auto: [true, false, false] }, cube())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 27.0)
})
