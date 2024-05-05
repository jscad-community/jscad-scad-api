const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { circle, square, linear_extrude } = require('../src/index.js')

test('linear_extrude (defaults)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({}, circle())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 237.76412907378855)
})

test('linear_extrude (height)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({ height: 10, center: true }, circle())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 23.77641290737884)
})

test('linear_extrude (twist)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({ height: 10, twist: 90, slices: 5 }, circle())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 25.16789184450169)
})

test('linear_extrude (scale)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({ height: 10, scale: 5, slices: 5 }, square())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 103.33333333333334)
})

test('linear_extrude (all)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({ height: 10, twist: 90, scale: 5, slices: 5, center: true }, circle())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 259.7713668865978)
})
