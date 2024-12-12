import { Coordinates } from '../../domain/Coordinates';

export class SocketCoordinates {
  constructor(
    private readonly lat: number,
    private readonly lon: number,
  ) {}

  static from(coords: Coordinates): SocketCoordinates {
    return new SocketCoordinates(coords.getLat(), coords.getLon());
  }

  toDomain(): Coordinates {
    return new Coordinates(this.lat, this.lon);
  }
}
