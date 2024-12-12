import type { Coordinates } from './Coordinates';
import type { TroopType } from './TroopType';

export class Troop {
  constructor(
    private readonly coords: Coordinates,
    private readonly type: TroopType,
  ) {}

  getCoords(): Coordinates {
    return this.coords;
  }

  getType(): TroopType {
    return this.type;
  }
}
