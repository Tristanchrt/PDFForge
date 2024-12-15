import { TroopsRepository } from '../../domain/TroopsRepository';
import { Troop } from '../../domain/Troop';
import { UserId } from '../../domain/UserId';
import { Injectable } from '@nestjs/common';
import { UUID } from 'node:crypto';
import { TroopId } from '../../domain/TroopId';

@Injectable()
export class DBTroopsRepository implements TroopsRepository {
  private readonly troopStore: Map<UUID, Troop[]> = new Map();

  async save(troop: Troop): Promise<void> {
    const userId = troop.getUser().getValue();
    if (!this.troopStore.has(userId)) {
      this.troopStore.set(userId, []);
    }
    const userTroops = this.troopStore.get(userId);
    if (
      userTroops.find((t) => t.getId().getValue() === troop.getId().getValue())
    ) {
      this.troopStore.set(
        userId,
        userTroops.map((t) =>
          t.getId().getValue() === troop.getId().getValue() ? troop : t,
        ),
      );
      return;
    }
    userTroops!.push(troop);
  }

  async findByUser(userId: UserId): Promise<Troop[]> {
    return this.troopStore.get(userId.getValue()) || [];
  }

  // TODO handle with optional
  async findById(userId: UserId, troopId: TroopId): Promise<Troop> {
    const userTroops = this.troopStore.get(userId.getValue());
    return userTroops.find(
      (troop) => troop.getId().getValue() === troopId.getValue(),
    );
  }
}
