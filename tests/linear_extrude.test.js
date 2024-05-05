const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { circle, square, linear_extrude } = require('../src/index.js')

test('linear_extrude (defaults)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({}, circle())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 311.86753622664)
})

test('linear_extrude (height)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({ height: 10, center: true }, circle())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 31.186753622663886)
})

test('linear_extrude (twist)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({ height: 10, twist: 90, slices: 5 }, circle())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 31.01559563714066)
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
  t.is(measurements.measureVolume(obs), 320.5310019540307)
})
