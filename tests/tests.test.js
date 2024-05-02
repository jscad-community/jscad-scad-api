const test = require('ava')

const { is_bool, is_function, is_list, is_num, is_string, is_undef } = require('../src/index.js')

test('tests (all)', (t) => {
  t.true(is_bool(true))
  t.true(is_bool(false))
  t.false(is_bool(1.0))
  t.false(is_bool(''))

  t.true(is_function(is_bool))
  t.false(is_function(1.0))
  t.false(is_function(''))

  t.true(is_list([1, 2, 3]))
  t.false(is_list(1.0))
  t.false(is_list(''))

  t.true(is_num(0))
  t.true(is_num(Infinity))
  t.false(is_num(''))

  t.true(is_string(''))
  t.true(is_string('HI'))
  t.false(is_string(1.0))

  t.true(is_undef(null))
  t.true(is_undef(undefined))
  t.false(is_undef(1.0))
  t.false(is_undef(''))
})
