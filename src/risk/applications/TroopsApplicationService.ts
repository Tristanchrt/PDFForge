import { Inject, Injectable } from '@nestjs/common';
import { TROOPS_REPOSITORY } from './Symbol';
import { TroopsRepository } from '../domain/TroopsRepository';
import { UserId } from '../domain/UserId';
import { Troop } from '../domain/Troop';
import { TroopToCreate } from '../domain/TroopToCreate';

@Injectable()
export class TroopsApplicationService {
  constructor(
    @Inject(TROOPS_REPOSITORY)
    private readonly dbTroopsRepository: TroopsRepository,
  ) {}

  async createTroop(troopToCreate: TroopToCreate): Promise<Troop> {
    const troop = troopToCreate.toCreate();
    await this.dbTroopsRepository.save(troop);
    return troop;
  }

  async getTroopsByUser(user: UserId): Promise<Troop[]> {
    return await this.dbTroopsRepository.findByUser(user);
  }
}
