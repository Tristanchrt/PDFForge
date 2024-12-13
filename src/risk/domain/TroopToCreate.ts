import { TroopType } from './TroopType';
import { Troop } from './Troop';
import { Coordinates } from './Coordinates';
import { UserId } from './UserId';

export class TroopToCreate {
  constructor(
    private readonly coords: Coordinates,
    private readonly type: TroopType,
    private readonly user: UserId,
  ) {}

  toCreate(): Troop {
    return new Troop(this.coords, this.type, this.user);
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
