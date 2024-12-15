import { Controller, Get } from '@nestjs/common';
import { CitiesApplicationService } from '../../applications/CitiesApplicationService';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SocketCities } from './SocketCities';

@ApiTags('Cities')
@Controller('api/v1/cities/')
export class RestCitiesResource {
  constructor(
    private readonly citiesApplicationService: CitiesApplicationService,
  ) {}

  @Get('available')
  @ApiResponse({
    status: 200,
    description: 'Return the cities',
    type: SocketCities,
    isArray: true,
  })
  getCities(): SocketCities {
    return SocketCities.from(this.citiesApplicationService.getCities());
  }
}
