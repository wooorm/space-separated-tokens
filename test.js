'use strict'

var test = require('tape')
var spaceSeparated = require('.')

test('space-separated-tokens', function(t) {
  t.equal(typeof spaceSeparated, 'object', 'should be an `object`')

  t.test('.parse()', function(st) {
    st.equal(typeof spaceSeparated.parse, 'function', 'should be a method')

    st.deepEqual(
      spaceSeparated.parse(),
      [],
      'should return an empty array for an empty value'
    )

    st.deepEqual(
      spaceSeparated.parse(' '),
      [],
      'should return an empty array for a single whitespace'
    )

    st.deepEqual(
      spaceSeparated.parse('\n\t\t '),
      [],
      'should return an empty array for a several whitespace characters'
    )

    st.deepEqual(
      spaceSeparated.parse(' foo bar 💩\t\n\t'),
      ['foo', 'bar', '💩'],
      'should work'
    )

    st.end()
  })

  t.test('.stringify()', function(st) {
    st.equal(typeof spaceSeparated.stringify, 'function', 'should be a method')

    st.deepEqual(
      spaceSeparated.stringify([]),
      '',
      'should return an empty string for an empty array'
    )

    st.deepEqual(
      spaceSeparated.stringify(['']),
      '',
      'should return an empty string for an empty entry'
    )

    st.deepEqual(
      spaceSeparated.stringify(['', '']),
      '',
      'should return an empty string for two empty entries'
    )

    st.deepEqual(
      spaceSeparated.stringify(['', 'foo']),
      'foo',
      'should ignore initial empty entries'
    )

    st.deepEqual(
      spaceSeparated.stringify(['foo', '']),
      'foo',
      'should ignore final empty values'
    )

    st.deepEqual(
      spaceSeparated.stringify(['a', 'b', 'd d']),
      'a b d d',
      'should do its best'
    )

    st.end()
  })

  t.end()
})
