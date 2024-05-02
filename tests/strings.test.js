const test = require('ava')

const { str, chr, ord } = require('../src/index.js')

test('strings (all)', (t) => {
  const number = 2
  const s = str('This is ', number, 3, ' and that\'s it.')

  t.deepEqual(s, 'This is 23 and that\'s it.')

  t.is(chr(65), 'A')
  t.is(chr(65, 97), 'Aa')
  t.is(chr([66, 98]), 'Bb')

  t.is(ord('a'), 97)
  t.is(ord('BCD'), 66)
})
