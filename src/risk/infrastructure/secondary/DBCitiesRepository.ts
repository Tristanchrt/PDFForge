import { CitiesRepository } from '../../domain/CitiesRepository';
import { City } from '../../domain/City';
import { CITIES_DATA } from './Cities.data';
import { Coordinates } from '../../domain/Coordinates';
import { Injectable } from '@nestjs/common';
import { UUID } from 'node:crypto';

@Injectable()
export class DBCitiesRepository implements CitiesRepository {
  private readonly availableCities: Set<City> = new Set<City>();
  private readonly cityUser: Map<UUID, City> = new Map();

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

  getMeCity(): City {
    return this.getCities().find((city) => city.getName() === 'Lyon') as City;
  }

  // TODO
  getAvailableCity(): City {
    return CITIES_DATA.find((city) => city.name === 'Lyon') as unknown as City;
  }
}
