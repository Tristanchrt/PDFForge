export class UserName {
  constructor(private readonly value: string) {
    if (value.length < 3 || value.length > 64) {
      throw new Error('The name is too short');
    }
  }
}
