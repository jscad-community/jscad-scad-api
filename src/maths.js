import { utils } from '@jscad/modeling'

// Trigonometric Functions
// NOTE: 360 degree based trig

export const cos = (a) => Math.cos(a / 180 * Math.PI)

export const sin = (a) => Math.sin(a / 180 * Math.PI)

export const tan = (a) => Math.tan(a / 180 * Math.PI)

export const acos = (a) => Math.acos(a) / Math.PI * 180

export const asin = (a) => Math.asin(a) / Math.PI * 180

export const atan = (a) => Math.atan(a) / Math.PI * 180

export const atan2 = (a, b) => Math.atan2(a, b) / Math.PI * 180

// Other Mathematical Functions

export const abs = (a) => Math.abs(a)

export const ceil = (a) => Math.ceil(a)

export const concat = (...arr) => utils.flatten(arr)

export const cross = (a, b) => {
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

export const exp = (a) => Math.exp(a)

export const floor = (a) => Math.floor(a)

export const ln = (a) => Math.log(a)

export const len = (a) => {
  if (Array.isArray(a)) return a.length
  if (typeof a === 'string') {
    return a.length
  }
  return undefined
}

// let (assigment) is supported by JavaScript

export const log = (a) => Math.log10(a)

export const max = (...values) => {
  values = utils.flatten(values)
  return Math.max(...values)
}

export const min = (...values) => {
  values = utils.flatten(values)
  return Math.min(...values)
}

// mod (operator %) is supported by JavaScript

export const norm = (v) => {
  if (Array.isArray(v)) {
    const sumofsqrs = v.reduce((a, v) => a + (v * v), 0)
    return Math.sqrt(sumofsqrs)
  }
  return undefined
}

export const pow = (a, b) => Math.pow(a, b)

export const rands = (min, max, vn, seed) => {
  const v = new Array(vn)
  for (let i = 0; i < vn; i++) {
    v[i] = Math.random() * (max - min) + min
  }
  return v
}

export const round = (a) => Math.round(a)

export const sign = (a) => a < 0 ? -1 : (a > 1 ? 1 : 0)

export const sqrt = (a) => Math.sqrt(a)

export const lookup = (ix, v) => {
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

