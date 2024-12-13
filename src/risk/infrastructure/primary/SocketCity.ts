import { RestCoordinates } from './RestCoordinates';
import { City } from '../../domain/City';

export class SocketCity {
  constructor(
    private readonly name: string,
    private readonly color: string,
    private readonly coordinates: RestCoordinates,
  ) {}

  static from(
   city: City
  ): SocketCity {
    return new SocketCity(
      city.getName(),
      city.getColor(),
      RestCoordinates.from(city.getCoords()),
    );
  }

  toDomain() {
    return {
      name: this.name,
      color: this.color,
      coordinates: this.coordinates.toDomain(),
    };
  }
}
