import { TroopToCreate } from '../../domain/TroopToCreate';
import { SocketCoordinates } from './SocketCoordinates';
import {
  fromSocketTroopType,
  SocketTroopType,
  toDomainTroopType,
} from './SocketTroopType';

export class SocketTroopToCreate {
  constructor(
    private readonly coordinates: SocketCoordinates,
    private readonly type: SocketTroopType,
  ) {}

  static from(coordinates: { x: number; y: number }, soldier: string) {
    return new SocketTroopToCreate(
      SocketCoordinates.from(coordinates.x, coordinates.y),
      fromSocketTroopType(soldier),
    );
  }

  toDomain(): TroopToCreate {
    return new TroopToCreate(
      this.coordinates.toDomain(),
      toDomainTroopType(this.type),
    );
  }
}
