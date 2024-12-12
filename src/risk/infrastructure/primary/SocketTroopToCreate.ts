import { TroopToCreate } from '../../domain/TroopToCreate';
import { SocketCoordinates } from './SocketCoordinates';
import {
  fromSocketTroopType,
  SocketTroopType,
  toDomainTroopType,
} from './SocketTroopType';
import { Troop } from '../../domain/Troop';

export class SocketTroopToCreate {
  constructor(
    private readonly coordinates: SocketCoordinates,
    private readonly type: SocketTroopType,
  ) {}

  static from(troop: Troop) {
    return new SocketTroopToCreate(
      SocketCoordinates.from(troop.getCoords()),
      fromSocketTroopType(troop.getType()),
    );
  }

  toDomain(): TroopToCreate {
    return new TroopToCreate(
      this.coordinates.toDomain(),
      toDomainTroopType(this.type),
    );
  }
}
