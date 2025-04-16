import { expect } from 'chai';
import {
  findMax,
  findMin,
  removeDuplicates
} from '../src/utils/arrayUtils.js';

describe('arrayUtils', () => {
  describe('findMax()', () => {
    it('should return max value', () => {
      expect(findMax([1, 5, 3])).to.equal(5);
    });

    it('should throw if not array', () => {
      expect(() => findMax('123')).to.throw('Input must be an array');
    });
  });

  describe('findMin()', () => {
    it('should return min value', () => {
      expect(findMin([1, -5, 3])).to.equal(-5);
    });

    it('should throw if not array', () => {
      expect(() => findMin({})).to.throw('Input must be an array');
    });
  });

  describe('removeDuplicates()', () => {
    it('should remove duplicates', () => {
      expect(removeDuplicates([1, 2, 2, 3])).to.eql([1, 2, 3]);
    });

    it('should throw if not array', () => {
      expect(() => removeDuplicates(null)).to.throw('Input must be an array');
    });
  });
});
