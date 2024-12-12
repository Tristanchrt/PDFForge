import { describe } from 'node:test';
import { UserName } from '../../../src/risk/domain/UserName';

describe('UserName', () => {
  it('should throw an exemption when invalid length', () => {
    expect(() => new UserName('a')).toThrowError('The name is too short');
    expect(() => new UserName('a'.repeat(66))).toThrowError(
      'The name is too short',
    );
  });
});
