import { describe } from 'node:test';
import { RestTroopToCreate } from '../../../../src/risk/infrastructure/primary/RestTroopToCreate';
import { TroopType } from '../../../../src/risk/domain/TroopType';
import { Coordinates } from '../../../../src/risk/domain/Coordinates';
import { UserId } from '../../../../src/risk/domain/UserId';
import { RestCoordinates } from '../../../../src/risk/infrastructure/primary/RestCoordinates';
import { RestTroopType } from '../../../../src/risk/infrastructure/primary/RestTroopType';

describe('TroopTransformer', () => {
  it('should transform RestTroopToCreate into TroopToCreate', () => {
    const restTroop = new RestTroopToCreate(
      new RestCoordinates(10, 20),
      RestTroopType.SOLDIER,
    );
    const user = UserId.newValue();

    const troopToCreate = restTroop.toDomain(user);

    expect(troopToCreate.getCoords()).toEqual(new Coordinates(10, 20));
    expect(troopToCreate.getType()).toEqual(TroopType.SOLDIER);
    expect(troopToCreate.getUser()).toEqual(user);
  });
});
