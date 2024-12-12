import { City } from '../../domain/City';
import { SocketCity } from './SocketCity';

export class SocketCities {
  constructor(private readonly cities: SocketCity[]) {}

  static from(values: City[]) {
    return new SocketCities(
      values.map((city) => {
        return SocketCity.from(city);
      }),
    );
  }

  toDomain() {
    return this.cities.map((city) => {
      return city.toDomain();
    });
  }
}
