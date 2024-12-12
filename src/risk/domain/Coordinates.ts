export class Coordinates {
  constructor(
    private readonly lat: number,
    private readonly lon: number,
  ) {}

  value(): { lat: number; lon: number } {
    return { lat: this.lat, lon: this.lon };
  }

  getLat(): number {
    return this.lat;
  }

  getLon(): number {
    return this.lon;
  }
}
