const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { rotate_extrude, square, translate } = require('../src/index.js')

test('rotate_extrude (defaults)', (t) => {
  const obs = translate({ v: [5, 0, 0] }, square())
  const result = rotate_extrude({}, obs)

  t.true(geometries.geom3.isA(result))
  t.notThrows(() => geometries.geom3.validate(result))
  t.is(measurements.measureVolume(result), 33.8599941892412)
})

test('rotate_extrude (angle pos)', (t) => {
  const obs = translate({ v: [5, 0, 0] }, square())
  const result = rotate_extrude({ angle: 270, $fn: 8 }, obs)

  t.true(geometries.geom3.isA(result))
  t.notThrows(() => geometries.geom3.validate(result))
  t.is(measurements.measureVolume(result), 23.334523779156065)
})

test('rotate_extrude (angle neg)', (t) => {
  const obs = translate({ v: [5, 0, 0] }, square())
  const result = rotate_extrude({ angle: -270 }, obs)

  t.true(geometries.geom3.isA(result))
  t.notThrows(() => geometries.geom3.validate(result))
  t.is(measurements.measureVolume(result), 25.431487770547868)
})
