import { TroopToCreate } from '../../../src/risk/domain/TroopToCreate';
import { TroopType } from '../../../src/risk/domain/TroopType';
import { Coordinates } from '../../../src/risk/domain/Coordinates';
import { UserId } from '../../../src/risk/domain/UserId';

describe('TroopToCreate', () => {
  const type = TroopType.SOLDIER;
  const coords = new Coordinates(1, 2);
  const user = UserId.newValue();

  it('should create a troop', () => {
    const troopToCreate = new TroopToCreate(coords, type, user);
    const troop = troopToCreate.toCreate();
    expect(troop).toEqual(
      expect.objectContaining({
        coords,
        type,
        user,
      }),
    );
  });
});
