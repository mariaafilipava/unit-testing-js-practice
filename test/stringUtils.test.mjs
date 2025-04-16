import { expect } from 'chai';
import {
  capitalize,
  reverseString,
  isPalindrome
} from '../src/utils/stringUtils.js';

describe('stringUtils', () => {
  describe('capitalize()', () => {
    it('should capitalize the first letter', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('should throw error if not string', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
    });
  });

  describe('reverseString()', () => {
    it('should reverse a string', () => {
      expect(reverseString('abc')).to.equal('cba');
    });

    it('should throw error if not string', () => {
      expect(() => reverseString(null)).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome()', () => {
    it('should return true for palindrome', () => {
      expect(isPalindrome('madam')).to.be.true;
    });

    it('should return false for non-palindrome', () => {
      expect(isPalindrome('hello')).to.be.false;
    });

    it('should throw error if not string', () => {
      expect(() => isPalindrome([])).to.throw('Input must be a string');
    });
  });
});
