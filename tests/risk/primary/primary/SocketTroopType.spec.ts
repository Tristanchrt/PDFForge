import { describe } from 'node:test';
import { fromSocketTroopType } from '../../../../src/risk/infrastructure/primary/RestTroopType';

describe('SocketTroopType', () => {
  it('should throw an error when the type is invalid fromSocket', () => {
    expect(() => fromSocketTroopType('INVALID')).toThrowError(
      'Invalid troop type: INVALID',
    );
  });
});
