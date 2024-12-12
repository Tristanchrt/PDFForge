import { describe } from 'node:test';
import { UserId } from '../../../src/risk/domain/UserId';

describe('UserId', () => {
  it('should not have same value twice', () => {
    const id1 = UserId.newValue();
    const id2 = UserId.newValue();
    expect(id1).not.toEqual(id2);
  });
});
