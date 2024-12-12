import { describe } from 'node:test';
import { Coordinates } from '../../../../src/risk/domain/Coordinates';
import { SocketCity } from '../../../../src/risk/infrastructure/primary/SocketCity';
import { City } from '../../../../src/risk/domain/City';

describe('SocketCity', () => {
  const coords = new Coordinates(1, 2);
  const lyon = new City('Lyon', coords, 'green');

  it('should transform from and to domain', () => {
    const socketCity = SocketCity.from(lyon);
    const city = socketCity.toDomain();
    expect(city).toEqual({ coordinates: coords, name: 'Lyon', color: 'green' });
  });
});
