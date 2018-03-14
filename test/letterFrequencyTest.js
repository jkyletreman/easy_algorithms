const { expect } = require('chai');
const { letterFrequency } = require('../letterFrequency');

describe('Letter Frequency', () => {
  describe('letterFrequency', () => {
    it('should handle the letter not being in the string', () => {
      expect(letterFrequency('I should fail', 'z')).to.eql('The letter z appears 0 times');
    });
    it('should return an integer as the frequency', () => {
      const result = letterFrequency('This is a test', 's');
      expect(result).to.eql(3);
    });
    it('should handle captial and lowercase letter the same', () => {
      const result = letterFrequency('This is a test', 't');
      expect(result).to.eql(3);
    });
    it('should eliminate all non alaphetical characters', () => {
      const result = letterFrequency('This ##is $$a %te&st', 't');
      expect(result).to.eql('Characters other than the alphabet are not allowed!');
    });
    it('should handle the target letter being uppercase', () => {
      const result = letterFrequency('This is a test', 'S');
      expect(result).to.eql(3);
    });
  });
});
