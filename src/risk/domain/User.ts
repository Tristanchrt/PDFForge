import { UserId } from './UserId';
import { UserName } from './UserName';

export class User {
  constructor(
    private readonly id: UserId,
    private readonly name: UserName,
  ) {}
}
