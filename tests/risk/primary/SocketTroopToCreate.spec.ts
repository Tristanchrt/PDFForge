import { describe } from 'node:test';
import { SocketTroopToCreate } from '../../../src/risk/infrastructure/primary/SocketTroopToCreate';
import { TroopType } from '../../../src/risk/domain/TroopType';
import { Coordinates } from '../../../src/risk/domain/Coordinates';

describe('SocketTroopToCreate', () => {
  const type = TroopType.SOLDIER;
  const coords = new Coordinates(1, 2);

  it('should transform from and to domain', () => {
    const socketTroop = SocketTroopToCreate.from({ x: 1, y: 2 }, 'SOLDIER');
    const troop = socketTroop.toDomain();
    expect(troop).toEqual({ coords, type });
  });
});