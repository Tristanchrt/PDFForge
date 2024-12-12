import { CitiesRepository } from '../../domain/CitiesRepository';
import { City } from '../../domain/City';
import { CITIES_DATA } from './Cities.data';
import { Coordinates } from '../../domain/Coordinates';

export class DBCitiesRepository implements CitiesRepository {
  constructor() {}

  async getCities(): Promise<City[]> {
    return CITIES_DATA.map(
      (city) =>
        new City(
          city.name,
          new Coordinates(city.coords[0], city.coords[1]),
          city.color,
        ),
    );
  }

  // TODO
  async getMeCity(): Promise<City> {
    const city = (await this.getCities()).find(
      (city) => city.getName() === 'Lyon',
    ) as City;
    return new City(
      city.getName(),
      new Coordinates(city.getCoords().getLat(), city.getCoords().getLon()),
      city.getColor(),
    );
  }

  // TODO
  getAvailable(): Promise<City> {
    return Promise.resolve(undefined);
  }
}
