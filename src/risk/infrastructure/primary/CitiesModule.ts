import { CitiesApplicationService } from '../../applications/CitiesApplicationService';
import { Module } from '@nestjs/common';
import { DBCitiesRepository } from '../secondary/DBCitiesRepository';
import { CITIES_REPOSITORY } from '../../applications/Symbol';

@Module({
  providers: [
    CitiesApplicationService,
    {
      provide: CITIES_REPOSITORY,
      useClass: DBCitiesRepository,
    },
  ],
  exports: [CitiesApplicationService],
})
export class CitiesModule {}
