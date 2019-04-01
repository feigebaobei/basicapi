// let expect = require('chai').expect
// var addNum = require('../temp/index.js')
// describe('test index.js', () => {
//   describe('test addNum fn', () => {
//     it('result add', () => {
//       // if (addNum(1, 2) !== 3) {
//       //   throw new Error('不是和')
//       // }
//       expect(addNum(1, 2)).to.be.equal(3)
//     })
//   })
// })

/*
describe 是'测试套件'（test suite）
name: 套件的名称。
fn: 实际执行的函数
it块： 测试用例。表示一个测试单元。是测试的最小单位。第一个参数：名称。第二个参数：函数。
*/


var expect = require('chai').expect
// import chai from 'chai'
// let expect = chai.expect
// var should = require('chai').should
// import {addNum} from '../temp/index.js'

describe('the code', () => {
  beforeEach(() => {})
  afterEach(() => {})
  it('zero', () => {
    // let something = 1
    // expect(something).to.exist
    // expect(addNum(1, 2).to.equal(3))
  })
  it('first', () => {
    let something = 1
    expect(something).to.exist
  })
  it('second', () => {
    var other = false
    expect(other).to.equal(false)
    // expect(others).and.with.at.of.but.does.equal(false)
  })
  it('three', () => {
    var other = false
    expect(other).equal(false)
    // should(others).equal(false)
  })
  it('fourth', () => {
    var arr = [1, 2, 3]
    expect(arr).members([2, 1, 3], 'msg')
  })
  it('fourth', () => {
    var arr = 1
    expect(arr).ok
  })
  it('fourth', () => {
    function test () {
      expect(arguments).to.be.arguments
    }
    test()
  })
  it('fourth', () => {
    // expect({a: 1, b: 2}).eql({a: 1}) // false
    expect({a: 1}).eql({a: 1}) // true
  })
})