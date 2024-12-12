import { randomUUID, UUID } from 'node:crypto';

export class UserId {
  constructor(private readonly value: UUID) {}

  static newValue(): UserId {
    return new UserId(randomUUID());
  }
}
