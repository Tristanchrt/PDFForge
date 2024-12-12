import { CitiesRepository } from '../../domain/CitiesRepository';
import { City } from '../../domain/City';
import { CITIES_DATA } from './Cities.data';
import { Coordinates } from '../../domain/Coordinates';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DBCitiesRepository implements CitiesRepository {
  constructor() {}

  getCities(): City[] {
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
  getMeCity(): City {
    return null;
  }

  // TODO
  getAvailableCity(): City {
    return CITIES_DATA.find((city) => city.name === 'Lyon') as unknown as City;
  }
}
