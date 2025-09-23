import test from 'ava'

import { geometries, measurements } from '@jscad/modeling'

import { circle, square, linear_extrude } from '../src/index.js'

test('linear_extrude (defaults)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({}, circle())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 237.76412907378852)
})

test('linear_extrude (height)', (t) => {
  // linear extrude 2D object
  const obs = linear_extrude({ height: 10, center: true }, circle())

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 23.776412907378838)
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
  t.is(measurements.measureVolume(obs), 259.77136688659783)
})
