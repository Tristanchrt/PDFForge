import { TroopType } from '../../domain/TroopType';

export enum RestTroopType {
  SOLDIER = 'SOLDIER',
}

export function fromSocketTroopType(type: string): RestTroopType {
  switch (type) {
    case RestTroopType.SOLDIER:
      return RestTroopType.SOLDIER;
    default:
      throw new Error(`Invalid troop type: ${type}`);
  }
}

export function toDomainTroopType(type: RestTroopType): TroopType {
  switch (type) {
    case RestTroopType.SOLDIER:
      return TroopType.SOLDIER;
  }
}
