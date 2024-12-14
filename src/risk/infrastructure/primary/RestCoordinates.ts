import { Coordinates } from '../../domain/Coordinates';
import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class RestCoordinates {
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({
    description: 'Latitude of the coordinates',
    example: 40.73061,
    required: true
  })
  private readonly lat: number;

  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({
    description: 'Longitude of the coordinates',
    example: -73.935242,
    required: true
  })
  private readonly lon: number;

  constructor(
   lat: number,
   lon: number,
  ) {
    this.lat = lat;
    this.lon = lon;
  }

  static from(coords: Coordinates): RestCoordinates {
    return new RestCoordinates(coords.getLat(), coords.getLon());
  }

  toDomain(): Coordinates {
    return new Coordinates(this.lat, this.lon);
  }
}
