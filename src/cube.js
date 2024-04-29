const { primitives } = require('@jscad/modeling')

/**
 * Creates a cube.
 *
 * When center is true, the cube is centered on the origin.
 *
 * @param {Object} [options] - options for construction
 * @param {Float} [options.size=[1,1,1]] - size of each side (X, Y, Z), or a single size
 * @param {Boolean} [options.center=false] - wether to center the cube/cuboid or not
 * @returns {Geom3} new 3D geometry
 *
 * @example
 * let cube1 = cube({size: 10})
 * let cube2 = cube({size: [5, 10, 20]})
 * let cube2 = cube({size: [5, 5, 3], center: true})
 */
const cube = (options) => {
  const defaults = {
    size: [1, 1, 1],
    center: false
  }
  let { size, center } = Object.assign({}, defaults, options)

  // convert scalar size to array
  if (Number.isFinite(size)) {
    size = [size, size, size]
  }

  // calculate center of cuboid
  const offset = [0, 0, 0]
  if (!center) {
    offset[0] = size[0] / 2
    offset[1] = size[1] / 2
    offset[2] = size[2] / 2
  }

  return primitives.cuboid({ size, center: offset })
}

module.exports = cube
