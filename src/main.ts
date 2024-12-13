import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Risk wars API')
    .setDescription('This is the API for the Risk wars game')
    .setVersion('1.0')
    .addTag('Troops')
    .addTag('Cities')
    .addTag('User')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const logger = new Logger(AppService.name);

  logger.log('Listening on port ' + (process.env.PORT ?? 9098));

  await app.listen(process.env.PORT ?? 9098);
}
bootstrap();
