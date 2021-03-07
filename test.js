import test from 'tape'
import {parse, stringify} from './index.js'

test('space-separated-tokens', function (t) {
  t.test('.parse()', function (st) {
    st.equal(typeof parse, 'function', 'should be a method')

    // @ts-ignore runtime
    st.deepEqual(parse(), [], 'should return an empty array for an empty value')

    st.deepEqual(
      parse(' '),
      [],
      'should return an empty array for a single whitespace'
    )

    st.deepEqual(
      parse('\n\t\t '),
      [],
      'should return an empty array for a several whitespace characters'
    )

    st.deepEqual(
      parse(' foo bar 💩\t\n\t'),
      ['foo', 'bar', '💩'],
      'should work'
    )

    st.end()
  })

  t.test('.stringify()', function (st) {
    st.equal(typeof stringify, 'function', 'should be a method')

    st.deepEqual(
      stringify([]),
      '',
      'should return an empty string for an empty array'
    )

    st.deepEqual(
      stringify(['']),
      '',
      'should return an empty string for an empty entry'
    )

    st.deepEqual(
      stringify(['', '']),
      '',
      'should return an empty string for two empty entries'
    )

    st.deepEqual(
      stringify(['', 'foo']),
      'foo',
      'should ignore initial empty entries'
    )

    st.deepEqual(
      stringify(['foo', '']),
      'foo',
      'should ignore final empty values'
    )

    st.deepEqual(stringify(['a', 'b', 'd d']), 'a b d d', 'should do its best')

    st.end()
  })

  t.end()
})
