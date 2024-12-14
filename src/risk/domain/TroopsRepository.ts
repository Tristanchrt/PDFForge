import { Troop } from './Troop';
import { UserId } from './UserId';

export interface TroopsRepository {
  save(troop: Troop): Promise<void>;
  findByUser(userId: UserId): Promise<Troop[]>;
}
