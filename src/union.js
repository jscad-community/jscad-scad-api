const { CAG } = require('@jscad/csg')

/** union/ combine the given shapes
 * @param {Object(s)|Array} objects - objects to combine : can be given
 * - one by one: union(a,b,c) or
 * - as an array: union([a,b,c])
 * @returns {CSG} new CSG object, the union of all input shapes
 *
 * @example
 * let unionOfSpherAndCube = union(sphere(), cube())
 */
const union = (...elements) => {
  let options = {}
  const defaults = {
    extrude2d: false
  }
  let o
  let i = 0
  let a = elements
  if (a[0].length) a = a[0]
  if ('extrude2d' in a[0]) { // first parameter is options
    options = Object.assign({}, defaults, a[0])
    o = a[i++]
  }

  o = a[i++]

  // TODO: add option to be able to set this?
  if ((typeof (a[i]) === 'object') && a[i] instanceof CAG && options.extrude2d) {
    o = a[i].extrude({ offset: [0, 0, 0.1] }) // -- convert a 2D shape to a thin solid, note: do not a[i] = a[i].extrude()
  }
  for (; i < a.length; i++) {
    let obj = a[i]

    if ((typeof (a[i]) === 'object') && a[i] instanceof CAG && options.extrude2d) {
      obj = a[i].extrude({ offset: [0, 0, 0.1] }) // -- convert a 2D shape to a thin solid:
    }
    o = o.union(obj)
  }
  return o
}

module.exports = union
