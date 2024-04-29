// -- Math functions, 360 deg based trig
const sin = (a) => {
  return Math.sin(a / 360 * Math.PI * 2)
}

const cos = (a) => {
  return Math.cos(a / 360 * Math.PI * 2)
}

const asin = (a) => {
  return Math.asin(a) / (Math.PI * 2) * 360
}

const acos = (a) => {
  return Math.acos(a) / (Math.PI * 2) * 360
}

const tan = (a) => {
  return Math.tan(a / 360 * Math.PI * 2)
}

const atan = (a) => {
  return Math.atan(a) / (Math.PI * 2) * 360
}

const atan2 = (a, b) => {
  return Math.atan2(a, b) / (Math.PI * 2) * 360
}

// Math functions, simple fowards

const ceil = (a) => {
  return Math.ceil(a)
}

const floor = (a) => {
  return Math.floor(a)
}

const abs = (a) => {
  return Math.abs(a)
}

const min = (a, b) => {
  return a < b ? a : b
}

const max = (a, b) => {
  return a > b ? a : b
}

const log = (a) => {
  return Math.log(a)
}

const pow = (a, b) => {
  return Math.pow(a, b)
}

const sign = (a) => {
  return a < 0 ? -1 : (a > 1 ? 1 : 0)
}

const sqrt = (a) => {
  return Math.sqrt(a)
}

const round = (a) => {
  return floor(a + 0.5)
}

const rands = (min, max, vn, seed) => {
  // -- seed is ignored for now, FIX IT (requires reimplementation of random())
  //    see http://stackoverflow.com/questions/424292/how-to-create-my-own-javascript-random-number-generator-that-i-can-also-set-the
  var v = new Array(vn)
  for (var i = 0; i < vn; i++) {
    v[i] = Math.random() * (max - min) + min
  }
}
}

const lookup = (ix, v) => {
  var r = 0
  for (var i = 0; i < v.length; i++) {
    var a0 = v[i]
    if (a0[0] >= ix) {
      i--
      a0 = v[i]
      var a1 = v[i + 1]
      var m = 0
      if (a0[0] !== a1[0]) {
        m = abs((ix - a0[0]) / (a1[0] - a0[0]))
      }
      // echo(">>",i,ix,a0[0],a1[0],";",m,a0[1],a1[1])
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
  sin,
  cos,
  asin,
  acos,
  tan,
  atan,
  atan2,
  ceil,
  floor,
  abs,
  min,
  max,
  rands,
  log,
  lookup,
  pow,
  sign,
  sqrt,
  round
}
