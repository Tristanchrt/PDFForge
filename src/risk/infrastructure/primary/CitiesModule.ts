import { CitiesApplicationService } from '../../applications/CitiesApplicationService';
import { Module } from '@nestjs/common';
import { DBCitiesRepository } from '../secondary/DBCitiesRepository';
import {
  CITIES_REPOSITORY,
  TROOPS_REPOSITORY,
} from '../../applications/Symbol';
import { RestTroopsResource } from './RestTroopsResource';
import { TroopsApplicationService } from '../../applications/TroopsApplicationService';
import { DBTroopsRepository } from '../secondary/DBTroopsRepository';
import { RestCitiesResource } from './RestCitiesResource';

@Module({
  providers: [
    CitiesApplicationService,
    {
      provide: CITIES_REPOSITORY,
      useClass: DBCitiesRepository,
    },
    TroopsApplicationService,
    {
      provide: TROOPS_REPOSITORY,
      useClass: DBTroopsRepository,
    },
  ],
  exports: [CitiesApplicationService, TroopsApplicationService],
  controllers: [RestTroopsResource, RestCitiesResource],
})
export class CitiesModule {}
