const test = require('ava')

const { cos, sin, tan, acos, asin, atan, atan2 } = require('../src/index.js')
const { abs, ceil, concat, cross, exp, floor, ln, len, log, lookup, max, min, norm, pow, rands, round, sign, sqrt } = require('../src/index.js')

test('maths (trigonometric)', (t) => {
  t.is(cos(0), 1)
  t.is(cos(90), 6.123233995736766e-17)
  t.is(cos(180), -1)
  t.is(cos(270), -1.8369701987210297e-16)
  t.is(cos(360), 1)

  t.is(sin(0), 0)
  t.is(sin(90), 1)
  t.is(sin(180), 1.2246467991473532e-16)
  t.is(sin(270), -1)
  t.is(sin(360), -2.4492935982947064e-16)

  t.is(tan(0), 0)
  t.is(tan(90), 16331239353195370)
  t.is(tan(180), -1.2246467991473532e-16)
  t.is(tan(270), 5443746451065123)
  t.is(tan(360), -2.4492935982947064e-16)

  t.is(acos(cos(0)), 0)
  t.is(acos(cos(90)), 90)
  t.is(acos(cos(180)), 180)
  t.is(acos(cos(270)), 90.00000000000001)
  t.is(acos(cos(360)), 0)

  t.is(asin(sin(0)), 0)
  t.is(asin(sin(90)), 90)
  t.is(asin(sin(180)), 7.016709298534876e-15)
  t.is(asin(sin(270)), -90)
  t.is(asin(sin(360)), -1.4033418597069752e-14)

  t.is(atan(tan(0)), 0)
  t.is(atan(tan(90)), 90)
  t.is(atan(tan(180)), -7.016709298534876e-15)
  t.is(atan(tan(270)), 89.99999999999999)
  t.is(atan(tan(360)), -1.4033418597069752e-14)

  t.is(atan2(5.0, -5.0), 135)
})

test('maths (other)', (t) => {
  t.is(abs(-5.0), 5.0)
  t.is(abs(0), 0)
  t.is(abs(8.0), 8.0)

  t.is(ceil(4.4), 5.0)
  t.is(ceil(-4.4), -4.0)

  t.deepEqual(concat('a', 'b', 'c', 'd', 'e', 'f'), ['a', 'b', 'c', 'd', 'e', 'f'])
  t.deepEqual(concat(['a', 'b', 'c'], ['d', 'e', 'f']), ['a', 'b', 'c', 'd', 'e', 'f'])
  t.deepEqual(concat(1, 2, 3, 4, 5, 6), [1, 2, 3, 4, 5, 6])

  t.deepEqual(cross([2, 3, 4], [5, 6, 7]), [-3, 6, -3])
  t.deepEqual(cross([2, 1, -3], [0, 4, 5]), [17, -10, 8])
  t.deepEqual(cross([2, 1], [0, 4]), 8)
  t.deepEqual(cross([1, -3], [4, 5]), 17)

  t.is(exp(1), 2.718281828459045)
  t.is(exp(ln(3) * 4), 80.99999999999996)

  t.is(floor(4.4), 4)
  t.is(floor(-4.4), -5)

  t.is(len('abcdef'), 6)
  t.is(len(6), undefined)
  t.is(len([1, 2, 3, 4, 5, 6, 7, 8]), 8)

  t.is(log(1000), 3)

  const table = [
    [-200, 5],
    [-50, 20],
    [-20, 18],
    [+80, 25],
    [+150, 2]
  ]
  t.is(lookup(80, table), 25)
  t.is(lookup(0, table), 19.4)

  t.is(max(3.0, 5.0), 5.0)
  t.is(max([8, 3, 4, 5]), 8.0)

  t.is(min(3.0, 5.0), 3.0)
  t.is(min([8, 3, 4, 5]), 3.0)

  t.is(norm([1, 2, 3, 4]), 5.477225575051661)
  t.is(norm([1, 2, 3]), 3.7416573867739413)
  t.is(norm([1, 2]), 2.23606797749979)
  t.is(norm([1]), 1)
  t.is(norm([]), 0)

  t.is(pow(10, 2), 100)
  t.is(pow(10, 3), 1000)
  t.is(pow(125, 1 / 3), 4.999999999999999)

  const vals = rands(0, 10, 1)
  t.is(vals.length, 1)
  t.true(Number.isFinite(vals[0]))

  t.is(round(4.4), 4)
  t.is(round(-4.4), -4)

  t.is(sign(4.4), 1)
  t.is(sign(-4.4), -1)
  t.is(sign(0.0), 0)

  t.is(sqrt(100.0), 10.0)
})
