import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken
} from '../src/utils/usersListUtils.js';

describe('usersListUtils', () => {
  const users = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 20, email: 'charlie@example.com' }
  ];

  it('should filter users by age', () => {
    const result = filterUsersByAge(users, 21, 30);
    expect(result).to.deep.equal([users[0], users[1]]);
  });

  it('should sort users by name', () => {
    const result = sortUsersByName(users);
    expect(result.map(u => u.name)).to.eql(['Alice', 'Bob', 'Charlie']);
  });

  it('should find user by ID', () => {
    const result = findUserById(users, 2);
    expect(result).to.deep.equal(users[1]);
  });

  it('should return null if user ID not found', () => {
    const result = findUserById(users, 999);
    expect(result).to.be.null;
  });

  it('should detect if email is taken', () => {
    expect(isEmailTaken(users, 'alice@example.com')).to.be.true;
  });

  it('should return false if email is not taken', () => {
    expect(isEmailTaken(users, 'notfound@example.com')).to.be.false;
  });
});
