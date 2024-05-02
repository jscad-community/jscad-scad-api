const test = require('ava')

const { geometries, measurements } = require('@jscad/modeling')

const { polyhedron } = require('../src/index.js')

test('polyhedron (defaults)', (t) => {
  // three or more points are required
  t.throws(() => polyhedron())
})

test('polyhedron (options)', (t) => {
  const obs = polyhedron({
    points: [
      [10, 10, 0], [10, -10, 0], [-10, -10, 0], [-10, 10, 0], // the four points at base
      [0, 0, 10] // the apex point
    ],
    faces: [
      [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4], // each triangle side
      [1, 0, 3], [2, 1, 3] // two triangles for square base
    ]
  })

  t.true(geometries.geom3.isA(obs))
  t.notThrows(() => geometries.geom3.validate(obs))
  t.is(measurements.measureVolume(obs), 1333.3333333333333)
})
