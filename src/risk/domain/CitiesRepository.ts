import { City } from './City';

export interface CitiesRepository {
  getCities(): City[];
  getMeCity(): City;
  getAvailableCity(): City;
}
