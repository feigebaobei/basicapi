var addNum = require('../temp/index.js')
describe('test index.js', () => {
  describe('test addNum fn', () => {
    it('result add', () => {
      if (addNum(1, 2) !== 3) {
        throw new Error('不是和')
      }
    })
  })
})