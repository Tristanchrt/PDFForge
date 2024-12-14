import { TroopsRepository } from '../../domain/TroopsRepository';
import { Troop } from '../../domain/Troop';
import { UserId } from '../../domain/UserId';
import { Injectable } from '@nestjs/common';
import { UUID } from 'node:crypto';

@Injectable()
export class DBTroopsRepository implements TroopsRepository {
  private readonly troopStore: Map<UUID, Troop[]> = new Map();

  async save(troop: Troop): Promise<void> {
    const userId = troop.getUser().getValue();
    if (!this.troopStore.has(userId)) {
      this.troopStore.set(userId, []);
    }
    const userTroops = this.troopStore.get(userId);
    userTroops!.push(troop);
  }

  async findByUser(userId: UserId): Promise<Troop[]> {
    return this.troopStore.get(userId.getValue()) || [];
  }
}
