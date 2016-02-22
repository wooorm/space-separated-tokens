/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module space-separated-tokens
 * @fileoverview Parse and stringify space-separated tokens.
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var trim = require('trim');

/*
 * Constants.
 */

var EMPTY = '';

/*
 * Characters.
 */

var C_SPACE = ' ';

/*
 * Expressions.
 *
 * HTML white-space is slightly different from JavaScript’s
 * `\s`, as the latter includes vertical tabs.
 */

var RE_WHITE_SPACE = /[\ \t\n\r\f]+/g;

/**
 * Parse space-separated tokens to an array.
 *
 * @param {string} value - Attribute-value to parse.
 * @return {Array.<string>} - Tokens.
 */
function parse(value) {
    var input = trim(String(value || EMPTY));

    if (input === EMPTY) {
        return [];
    }

    return input.split(RE_WHITE_SPACE);
}

/**
 * Compile an array to space-separated tokens.
 *
 * @param {Array.<string>} values - Tokens.
 * @return {string} - Space-separated tokens.
 */
function stringify(values) {
    return trim(values.join(C_SPACE));
}

/*
 * Expose.
 */

module.exports = {
    'parse': parse,
    'stringify': stringify
};
