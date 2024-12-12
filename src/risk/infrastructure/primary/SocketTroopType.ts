import { TroopType } from '../../domain/TroopType';

export enum SocketTroopType {
  SOLDIER = 'SOLDIER',
}

export function fromSocketTroopType(type: string): SocketTroopType {
  switch (type) {
    case SocketTroopType.SOLDIER:
      return SocketTroopType.SOLDIER;
    default:
      throw new Error(`Invalid troop type: ${type}`);
  }
}

export function toDomainTroopType(type: SocketTroopType): TroopType {
  switch (type) {
    case SocketTroopType.SOLDIER:
      return TroopType.SOLDIER;
  }
}
