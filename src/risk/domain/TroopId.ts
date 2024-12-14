import { randomUUID, UUID } from 'node:crypto';

export class TroopId {
  constructor(private readonly value: UUID) {}

  static newId(): TroopId {
    return new TroopId(randomUUID());
  }

  getValue(): UUID {
    return this.value;
  }
}