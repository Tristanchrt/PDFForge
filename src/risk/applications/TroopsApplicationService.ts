import { Inject, Injectable } from '@nestjs/common';
import { TROOPS_REPOSITORY } from './Symbol';
import { TroopsRepository } from '../domain/TroopsRepository';
import { UserId } from '../domain/UserId';
import { Troop } from '../domain/Troop';
import { TroopToCreate } from '../domain/TroopToCreate';
import { Coordinates } from '../domain/Coordinates';
import { TroopId } from '../domain/TroopId';
import { TroopMovements } from '../domain/TroopMovements';

@Injectable()
export class TroopsApplicationService {
  private readonly troopMovements: TroopMovements;

  constructor(
    @Inject(TROOPS_REPOSITORY)
    private readonly dbTroopsRepository: TroopsRepository,
  ) {
    this.troopMovements = new TroopMovements(this.dbTroopsRepository);
  }

  async createTroop(troopToCreate: TroopToCreate): Promise<Troop> {
    const troop = troopToCreate.toCreate();
    await this.dbTroopsRepository.save(troop);
    return troop;
  }

  async getTroopsByUser(user: UserId): Promise<Troop[]> {
    return await this.dbTroopsRepository.findByUser(user);
  }

  async moveTroop(
    user: UserId,
    troop: TroopId,
    coordinates: Coordinates,
  ): Promise<Troop> {
    return await this.troopMovements.moveTroop(user, troop, coordinates);
  }
}
