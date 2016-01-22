'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var curry2 = require('./')

/*!
 * fixtures.
 */

function binaryAdd (a, b) {
  return a + b
}

function calc (a, b) {
  return a + b + this.length
}

/*!
 * tests.
 */

test('curry2()', function (t) {
  var add = curry2(binaryAdd)
  var cal = curry2(calc, [1, 2, 3, 4])

  t.deepEqual(add(), add, 'when called without arguments the same function is returned.')
  t.equal(add(15).length, 1, 'when partially applied, a unary function is returned.')
  t.equal(add(15, 5), 20, 'when fully applied, expected result is returned.')
  t.equal(cal(15, 5), 24, '`this` is properly bound.')
  t.equal(add.uncurry().length, 2, 'uncurry() returns original.')
  t.end()
})
