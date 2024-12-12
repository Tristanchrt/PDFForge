import { TroopType } from './TroopType';
import { Troop } from './Troop';
import { Coordinates } from './Coordinates';

export class TroopToCreate {
  constructor(
    private readonly coords: Coordinates,
    private readonly type: TroopType,
  ) {}

  toCreate(): Troop {
    return new Troop(this.coords, this.type);
  }
}
