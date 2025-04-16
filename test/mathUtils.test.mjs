import { expect } from 'chai';
import {
  add,
  subtract,
  multiply,
  divide
} from '../src/utils/mathUtils.js';

describe('mathUtils', () => {
  describe('add()', () => {
    it('should return correct sum', () => {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe('subtract()', () => {
    it('should return correct difference', () => {
      expect(subtract(5, 2)).to.equal(3);
    });
  });

  describe('multiply()', () => {
    it('should return correct product', () => {
      expect(multiply(3, 4)).to.equal(12);
    });
  });

  describe('divide()', () => {
    it('should return correct result', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('should throw error when dividing by 0', () => {
      expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
    });
  });
});
