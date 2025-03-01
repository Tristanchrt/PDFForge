import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API PDF Generator from template')
    .setDescription('This is an API for generating PDF from template')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const logger = new Logger();

  logger.log('Listening on port ' + (process.env.PORT ?? 9098));

  await app.listen(process.env.PORT ?? 9098);
}
bootstrap();
