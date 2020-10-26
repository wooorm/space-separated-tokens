'use strict'

exports.parse = parse
exports.stringify = stringify

function parse(value) {
  var input = String(value || '').trim()
  return input ? input.split(/[ \t\n\r\f]+/g) : []
}

function stringify(values) {
  return values.join(' ').trim()
}
