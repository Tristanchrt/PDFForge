import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketCitiesResource } from './risk/infrastructure/primary/SocketCitiesResource';
import { CitiesModule } from './risk/infrastructure/primary/CitiesModule';
import { TemplateFileModule } from './templateFile/infrastructure/primary/TemplateFileModule';

@Module({
  imports: [CitiesModule, TemplateFileModule],
  controllers: [AppController],
  providers: [AppService, SocketCitiesResource],
})
export class AppModule {}
