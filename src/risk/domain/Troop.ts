import type { Coordinates } from './Coordinates';
import type { TroopType } from './TroopType';
import { UserId } from './UserId';

export class Troop {
  constructor(
    private readonly coords: Coordinates,
    private readonly type: TroopType,
    private readonly user: UserId,
  ) {}

  getCoords(): Coordinates {
    return this.coords;
  }

  getType(): TroopType {
    return this.type;
  }

  getUser(): UserId {
    return this.user;
  }
}
