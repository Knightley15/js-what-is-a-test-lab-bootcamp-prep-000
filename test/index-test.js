var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


 describe("Height", () = {
    it('returns "74"', () = {
      expect(index.height).toBeEqual('74')
    })
  })
  

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
      ${name} is ${height} inches tall`
 
    })
  })

})

