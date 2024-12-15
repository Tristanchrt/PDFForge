import { City } from '../../domain/City';
import { RestCity } from './RestCity';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class RestCities {
  @ValidateNested()
  @IsNotEmpty()
  @Type(() => RestCity)
  @ApiProperty({
    description: 'List of cities',
    required: true,
    type: RestCity,
  })
  private readonly cities: RestCity[];

  constructor(cities: RestCity[]) {
    this.cities = cities;
  }

  static from(values: City[]) {
    return new RestCities(
      values.map((city) => {
        return RestCity.from(city);
      }),
    );
  }

  toDomain() {
    return this.cities.map((city) => {
      return city.toDomain();
    });
  }
}
