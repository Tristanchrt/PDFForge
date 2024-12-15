import type { Coordinates } from './Coordinates';
import type { TroopType } from './TroopType';
import { UserId } from './UserId';
import { TroopId } from './TroopId';

export class Troop {
  constructor(
    private readonly id: TroopId,
    private readonly coords: Coordinates,
    private readonly type: TroopType,
    private readonly user: UserId,
  ) {}

  move(coords: Coordinates): Troop {
    return new Troop(this.id, coords, this.type, this.user);
  }

  getId(): TroopId {
    return this.id;
  }

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
