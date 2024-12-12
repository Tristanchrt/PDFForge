import { describe } from 'node:test';
import { SocketTroopToCreate } from '../../../../src/risk/infrastructure/primary/SocketTroopToCreate';
import { TroopType } from '../../../../src/risk/domain/TroopType';
import { Coordinates } from '../../../../src/risk/domain/Coordinates';
import { Troop } from '../../../../src/risk/domain/Troop';

describe('SocketTroopToCreate', () => {
  const type = TroopType.SOLDIER;
  const coords = new Coordinates(1, 2);
  const soldier = new Troop(coords, type);

  it('should transform from and to domain', () => {
    const socketTroop = SocketTroopToCreate.from(soldier);
    const troop = socketTroop.toDomain();
    expect(troop).toEqual({ coords, type });
  });
});
