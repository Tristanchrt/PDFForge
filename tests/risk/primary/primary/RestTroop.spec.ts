import { describe } from 'node:test';
import { Troop } from '../../../../src/risk/domain/Troop';
import { UserId } from '../../../../src/risk/domain/UserId';
import { Coordinates } from '../../../../src/risk/domain/Coordinates';
import { TroopType } from '../../../../src/risk/domain/TroopType';
import { TroopId } from '../../../../src/risk/domain/TroopId';
import { RestTroop } from '../../../../src/risk/infrastructure/primary/RestTroop';

describe('Rest Troop', () => {
  it('should transform troop to restTroop', () => {
    const id = TroopId.newId();
    const troop = new Troop(
      id,
      new Coordinates(1, 2),
      TroopType.SOLDIER,
      UserId.newValue(),
    );

    expect(RestTroop.from(troop)).toEqual({
      id: id.getValue(),
      coordinates: { lat: 1, lon: 2 },
      type: 'SOLDIER',
    });
  });
});
