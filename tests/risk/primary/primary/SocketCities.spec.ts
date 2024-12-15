import { describe } from 'node:test';
import { Coordinates } from '../../../../src/risk/domain/Coordinates';
import { RestCities } from '../../../../src/risk/infrastructure/primary/RestCities';
import { City } from '../../../../src/risk/domain/City';

describe('SocketCities', () => {
  const coords = new Coordinates(1, 2);
  const lyon = new City('Lyon', coords, 'green');
  const paris = new City('Paris', coords, 'blue');

  it('should transform from and to domain', () => {
    const socketCities = RestCities.from([lyon, paris]);
    const city = socketCities.toDomain();
    expect(city).toEqual([
      { coordinates: coords, name: 'Lyon', color: 'green' },
      { coordinates: coords, name: 'Paris', color: 'blue' },
    ]);
  });
});
