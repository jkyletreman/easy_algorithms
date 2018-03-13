// require the expect library
const { expect } = require('chai');
// from the groupAnas files require the groupAnas method
const groupAnas = require('../groupAnas').groupAnas;
// require the variable testME
const testME = require('../groupAnas').testME;

// create a family of tests
describe('Anagrams', () => {
  // create a group of tests around groupAnas
  describe('groupAnas', () => {
    // it signals the first test, a description followed by the test
    it('should return anagrams grouped by order in array', () => {
      const result = groupAnas(testME);
      // expect something to equal (order matters)
      expect(result).to.eql([
        ['eat', 'tea', 'ate'],
        ['tan', 'nat'],
        ['bat'],
      ]);
    });
    it('the combined inner arrays length should equal to the original array length', () => {
      const result = groupAnas(testME);
      expect(result[0].length + result[1].length + result[2].length).to.eql(testME.length);
    });
  });
});
