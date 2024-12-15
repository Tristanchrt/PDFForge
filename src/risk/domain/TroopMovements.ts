import { TroopsRepository } from './TroopsRepository';
import { Troop } from './Troop';
import { Coordinates } from './Coordinates';
import { TroopId } from './TroopId';
import { UserId } from './UserId';

export class TroopMovements {
  constructor(private readonly dbTroopsRepository: TroopsRepository) {}

  async moveTroop(
    user: UserId,
    troop: TroopId,
    coordinates: Coordinates,
  ): Promise<Troop> {
    const troopToMove = await this.dbTroopsRepository.findById(user, troop);
    // TODO handle optional
    const movedTroop = troopToMove.move(coordinates);
    await this.dbTroopsRepository.save(movedTroop);
    return movedTroop;
  }
}
