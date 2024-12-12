import { Coordinates } from './Coordinates';

export class City {
  constructor(
    private readonly name: string,
    private readonly coords: Coordinates,
    private readonly color: string,
  ) {}

  getName() {
    return this.name;
  }

  getColor() {
    return this.color;
  }

  getCoords() {
    return this.coords;
  }
}