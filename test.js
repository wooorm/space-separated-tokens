import assert from 'node:assert/strict'
import test from 'node:test'
import {parse, stringify} from './index.js'

test('space-separated-tokens', async function (t) {
  await t.test('.parse()', () => {
    assert.equal(typeof parse, 'function', 'should be a method')

    assert.deepEqual(
      // @ts-expect-error runtime
      parse(),
      [],
      'should return an empty array for an empty value'
    )

    assert.deepEqual(
      parse(' '),
      [],
      'should return an empty array for a single whitespace'
    )

    assert.deepEqual(
      parse('\n\t\t '),
      [],
      'should return an empty array for a several whitespace characters'
    )

    assert.deepEqual(
      parse(' foo bar 💩\t\n\t'),
      ['foo', 'bar', '💩'],
      'should work'
    )
  })

  await t.test('.stringify()', () => {
    assert.equal(typeof stringify, 'function', 'should be a method')

    assert.deepEqual(
      stringify([]),
      '',
      'should return an empty string for an empty array'
    )

    assert.deepEqual(
      stringify(['']),
      '',
      'should return an empty string for an empty entry'
    )

    assert.deepEqual(
      stringify(['', '']),
      '',
      'should return an empty string for two empty entries'
    )

    assert.deepEqual(
      stringify(['', 'foo']),
      'foo',
      'should ignore initial empty entries'
    )

    assert.deepEqual(
      stringify(['foo', '']),
      'foo',
      'should ignore final empty values'
    )

    assert.deepEqual(
      stringify(['a', 'b', 'd d']),
      'a b d d',
      'should do its best'
    )
  })
})
