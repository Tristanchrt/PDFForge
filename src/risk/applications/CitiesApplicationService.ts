import { Inject, Injectable } from '@nestjs/common';
import { CitiesRepository } from '../domain/CitiesRepository';
import { City } from '../domain/City';
import { CITIES_REPOSITORY } from './Symbol';

@Injectable()
export class CitiesApplicationService {
  constructor(
    @Inject(CITIES_REPOSITORY)
    private readonly dbCitiesRepository: CitiesRepository,
  ) {}

  getAvailableCity(): City {
    return this.dbCitiesRepository.getAvailableCity();
  }

  getCities(): City[] {
    return this.dbCitiesRepository.getCities();
  }

  getMeCity(): City {
    return this.dbCitiesRepository.getMeCity();
  }
}
