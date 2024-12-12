export class Coordinates {
  constructor(
    private readonly lat: number,
    private readonly lon: number,
  ) {}

  value(): number[] {
    return [this.lat, this.lon];
  }

  getLat(): number {
    return this.lat;
  }

  getLon(): number {
    return this.lon;
  }
}
