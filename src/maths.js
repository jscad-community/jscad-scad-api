const { utils } = require('@jscad/modeling')

// Trigonometric Functions
// NOTE: 360 degree based trig

const cos = (a) => Math.cos(a / 180 * Math.PI)

const sin = (a) => Math.sin(a / 180 * Math.PI)

const tan = (a) => Math.tan(a / 180 * Math.PI)

const acos = (a) => Math.acos(a) / Math.PI * 180

const asin = (a) => Math.asin(a) / Math.PI * 180

const atan = (a) => Math.atan(a) / Math.PI * 180

const atan2 = (a, b) => Math.atan2(a, b) / Math.PI * 180

// Other Mathematical Functions

const abs = (a) => Math.abs(a)

const ceil = (a) => Math.ceil(a)

const concat = (...arr) => utils.flatten(arr)

const cross = (a, b) => {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length === 2 && b.length === 2) {
      // WHAT!?!?!? OPENSCAD is so strange
      return a[0] * b[1] - a[1] * b[0]
    }
    if (a.length === 3 && b.length === 3) {
      const ax = a[0]
      const ay = a[1]
      const az = a[2]
      const bx = b[0]
      const by = b[1]
      const bz = b[2]
      return [ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx]
    }
  }
  return undefined
}

const exp = (a) => Math.exp(a)

const floor = (a) => Math.floor(a)

const ln = (a) => Math.log(a)

const len = (a) => {
  if (Array.isArray(a)) return a.length
  if (typeof a === 'string') {
    return a.length
  }
  return undefined
}

// let (assigment) is supported by JavaScript

const log = (a) => Math.log10(a)

const max = (...values) => {
  values = utils.flatten(values)
  return Math.max(...values)
}

const min = (...values) => {
  values = utils.flatten(values)
  return Math.min(...values)
}

// mod (operator %) is supported by JavaScript

const norm = (v) => {
  if (Array.isArray(v)) {
    const sumofsqrs = v.reduce((a, v) => a + (v * v), 0)
    return Math.sqrt(sumofsqrs)
  }
  return undefined
}

const pow = (a, b) => Math.pow(a, b)

const rands = (min, max, vn, seed) => {
  const v = new Array(vn)
  for (let i = 0; i < vn; i++) {
    v[i] = Math.random() * (max - min) + min
  }
  return v
}

const round = (a) => Math.round(a)

const sign = (a) => a < 0 ? -1 : (a > 1 ? 1 : 0)

const sqrt = (a) => Math.sqrt(a)

const lookup = (ix, v) => {
  let r = 0
  for (let i = 0; i < v.length; i++) {
    let a0 = v[i]
    if (a0[0] >= ix) {
      i--
      a0 = v[i]

      const a1 = v[i + 1]
      let m = 0
      if (a0[0] !== a1[0]) {
        m = abs((ix - a0[0]) / (a1[0] - a0[0]))
      }
      if (m > 0) {
        r = a0[1] * (1 - m) + a1[1] * m
      } else {
        r = a0[1]
      }
      return r
    }
  }
  return r
}

module.exports = {
  // trig
  sin,
  cos,
  asin,
  acos,
  tan,
  atan,
  atan2,
  // other
  abs,
  ceil,
  concat,
  cross,
  exp,
  floor,
  ln,
  len,
  log,
  lookup,
  max,
  min,
  norm,
  pow,
  rands,
  round,
  sign,
  sqrt
}
