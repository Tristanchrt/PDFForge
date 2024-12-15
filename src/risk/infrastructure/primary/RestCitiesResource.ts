import { Controller, Get } from '@nestjs/common';
import { CitiesApplicationService } from '../../applications/CitiesApplicationService';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RestCities } from './RestCities';
import { RestCity } from './RestCity';

@ApiTags('Cities')
@Controller('api/v1/')
export class RestCitiesResource {
  constructor(
    private readonly citiesApplicationService: CitiesApplicationService,
  ) {}

  @Get('cities/available')
  @ApiResponse({
    status: 200,
    description: 'Return the cities',
    type: RestCities,
    isArray: true,
  })
  getCities(): RestCities {
    return RestCities.from(this.citiesApplicationService.getCities());
  }

  @Get('users/:userId/cities/me')
  @ApiResponse({
    status: 200,
    description: 'Return the city of the user',
    type: RestCities,
  })
  getCity(): RestCity {
    return RestCity.from(this.citiesApplicationService.getMeCity());
  }
}
