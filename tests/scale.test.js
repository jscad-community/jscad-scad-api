const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { circle, cube, scale } = require('../src/index.js')

test('scale (options)', (t) => {
  // scale 2D object
  let obs = scale({ v: [3, 3] }, circle())

  t.true(geometries.geom2.isA(obs))
  t.notThrows(() => geometries.geom2.validate(obs))
  t.is(measurements.measureArea(obs), 28.068078260397513)

  // scale 3D object
  obs = scale({ v: [3, 3, 3] }, cube())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 27.0)
})
