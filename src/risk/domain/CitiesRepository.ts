import { City } from './City';

export interface CitiesRepository {
  getCities(): Promise<City[]>;
  getMeCity(): Promise<City>;
  getAvailable(): Promise<City>;
}
