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

describe('the code', () => {
  beforeEach(() => {})
  afterEach(() => {})
  it('something', () => {
    let something = 1
    expect(something).to.exist
  })
  it('other something', () => {
    var other = false
    expect(other).to.equal(false)
  })
  it('other something', () => {
    var other = false
    expect(other).to.equal(false)
  })
})