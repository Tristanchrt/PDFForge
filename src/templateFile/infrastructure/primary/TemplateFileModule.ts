import { Module } from '@nestjs/common';
import { RestTemplateFileResource } from './RestTemplateFileResource';
import { PdfService } from '../../application/PdfService';

@Module({
  providers: [PdfService],
  exports: [],
  controllers: [RestTemplateFileResource],
})
export class TemplateFileModule {}
