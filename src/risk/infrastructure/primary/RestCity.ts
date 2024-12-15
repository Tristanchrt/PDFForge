import { RestCoordinates } from './RestCoordinates';
import { City } from '../../domain/City';
import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class RestCity {
  @IsNotEmpty()
  @Type(() => String)
  @ApiProperty({
    description: 'Name of the city',
    example: 'Lyon',
    required: true,
  })
  private readonly name: string;

  @IsNotEmpty()
  @Type(() => String)
  @ApiProperty({
    description: 'Color of the city',
    example: 'red',
    required: true
  })
  private readonly color: string;

  @IsNotEmpty()
  @Type(() => RestCoordinates)
  @ApiProperty({
    description: 'Coordinates of the city',
    required: true,
  })
  private readonly coordinates: RestCoordinates;

  constructor(
    name: string,
    color: string,
    coordinates: RestCoordinates,

  ) {
    this.name = name;
    this.color = color;
    this.coordinates = coordinates;
  }

  static from(city: City): RestCity {
    return new RestCity(
      city.getName(),
      city.getColor(),
      RestCoordinates.from(city.getCoords()),
    );
  }

  toDomain() {
    return {
      name: this.name,
      color: this.color,
      coordinates: this.coordinates.toDomain(),
    };
  }
}
