import { Troop } from './Troop';
import { UserId } from './UserId';
import { TroopId } from './TroopId';

export interface TroopsRepository {
  save(troop: Troop): Promise<void>;
  findByUser(user: UserId): Promise<Troop[]>;
  findById(user: UserId, troop: TroopId): Promise<Troop>;
}
