import { Coordinates } from '../../domain/Coordinates';

export class SocketCoordinates {
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {}

  static from(x: number, y: number): SocketCoordinates {
    return new SocketCoordinates(x, y);
  }

  toDomain(): Coordinates {
    return new Coordinates(this.x, this.y);
  }
}
