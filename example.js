// Dependencies:
var spaceSeparated = require('./index.js');

// Parsing:
var values = spaceSeparated.parse(' foo\tbar\nbaz  ');

// Yields:
console.log('js', require('util').inspect(values));

// Compiling:
var value = spaceSeparated.stringify(values);

// Yields:
console.log('js', require('util').inspect(value));
