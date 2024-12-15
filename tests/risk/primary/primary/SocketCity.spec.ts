import { describe } from 'node:test';
import { Coordinates } from '../../../../src/risk/domain/Coordinates';
import { RestCity } from '../../../../src/risk/infrastructure/primary/RestCity';
import { City } from '../../../../src/risk/domain/City';

describe('SocketCity', () => {
  const coords = new Coordinates(1, 2);
  const lyon = new City('Lyon', coords, 'green');

  it('should transform from and to domain', () => {
    const socketCity = RestCity.from(lyon);
    const city = socketCity.toDomain();
    expect(city).toEqual({ coordinates: coords, name: 'Lyon', color: 'green' });
  });
});
