let assert = require('chai').assert,
  foo = 'bar',
  num = 0,
  beverages = { tea: ['chai', 'matcha', 'oolong']}

assert.typeOf(foo, 'string')
// assert.typeOf(num, 'string')
assert.typeOf(foo, 'string', 'foo is a string')
// assert.typeOf(num, 'string', 'num do not a string')
assert.equal(foo, 'bar', 'foo equal `bar`')

let expect = require('chai').expect

expect(num).to.equal(1)