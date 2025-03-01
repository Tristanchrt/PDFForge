import { Module } from '@nestjs/common';
import { TemplateFileModule } from './templateFile/infrastructure/primary/TemplateFileModule';

@Module({
  imports: [TemplateFileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
