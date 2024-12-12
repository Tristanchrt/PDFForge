import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketCitiesResource } from './risk/infrastructure/primary/SocketCitiesResource';
import { CitiesModule } from './risk/infrastructure/primary/CitiesModule';

@Module({
  imports: [CitiesModule],
  controllers: [AppController],
  providers: [AppService, SocketCitiesResource],
})
export class AppModule {}
