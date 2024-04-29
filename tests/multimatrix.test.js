const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { cube, multimatrix } = require('../src/index.js')

test('multimatrix (options)', (t) => {
  // transform 3D object
  let shape = cube({ size: [2, 3, 5] })
  let obs = multimatrix({}, shape)

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 30.0)

  // skew the shape
  let m = [
    [1, 0, 0, 0],
    [0, 1, 0.7, 0],  // The "0.7" is the skew value; pushed along the y axis as z changes.
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ]
  obs = multimatrix({m}, shape)

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 30.0)
})
