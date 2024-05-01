const test = require('ava')

const { assert, echo, version, version_num } = require('../src/index.js')

test('features (all)', (t) => {
  echo('JSCAD-SCAD-API', version(), version_num())

  t.notThrows(() => assert(true))
  t.notThrows(() => assert(true, 'test2'))
  t.throws(() => assert(false))
  t.throws(() => assert(false, 'hi'))
})
