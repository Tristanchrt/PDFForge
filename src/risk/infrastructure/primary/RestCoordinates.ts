import { Coordinates } from '../../domain/Coordinates';

export class RestCoordinates {
  constructor(
    private readonly lat: number,
    private readonly lon: number,
  ) {}

  static from(coords: Coordinates): RestCoordinates {
    return new RestCoordinates(coords.getLat(), coords.getLon());
  }

  toDomain(): Coordinates {
    return new Coordinates(this.lat, this.lon);
  }
}
