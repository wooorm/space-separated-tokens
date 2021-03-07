export function parse(value) {
  var input = String(value || '').trim()
  return input ? input.split(/[ \t\n\r\f]+/g) : []
}

export function stringify(values) {
  return values.join(' ').trim()
}
