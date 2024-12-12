import { TroopToCreate } from '../../../src/risk/domain/TroopToCreate';
import { TroopType } from '../../../src/risk/domain/TroopType';
import { Coordinates } from '../../../src/risk/domain/Coordinates';

describe('TroopToCreate', () => {
  const type = TroopType.SOLDIER;
  const coords = new Coordinates(1, 2);

  it('should create a troop', () => {
    const troopToCreate = new TroopToCreate(coords, type);
    const troop = troopToCreate.toCreate();
    expect(troop).toEqual({ coords, type });
  });
});
