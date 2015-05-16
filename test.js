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
 * tests.
 */

test('curry2()', function (t) {
  var add = curry2(function add (a, b) {
    return a + b
  })

  var calc = curry2(function calc (a, b) {
    return a + b + this.length
  }, [1, 2, 3, 4])

  t.equal(add(15).length, 1, 'when partially applied, a unary function is returned.')
  t.equal(add(15, 5), 20, 'when fully applied, expected result is returned.')
  t.equal(calc(15, 5), 24, '`this` is properly bound.')
  t.equal(add.uncurry().length, 2, 'uncurry() returns original.')
  t.end()
})
