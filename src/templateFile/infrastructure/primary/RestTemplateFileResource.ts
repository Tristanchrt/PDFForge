import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  StreamableFile,
  ValidationPipe,
} from '@nestjs/common';
import { ApiProduces, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PdfService } from '../../application/PdfService';
import { RestPdfToGenerate } from './RestPdfToGenerate';
import { Readable } from 'node:stream';

@ApiTags('TemplateFile')
@Controller('api/v1/')
export class RestTemplateFileResource {
  constructor(private readonly pdfService: PdfService) {}

  @Get('test')
  @ApiResponse({
    status: 200,
    description: 'Test api endpoint',
  })
  getTest(): string {
    return 'Hello World!';
  }

  @ApiProduces('application/pdf')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Return a new PDF',
    content: {
      'application/pdf': {},
    },
  })
  @Post('generate-pdf')
  async generate(
    @Body(new ValidationPipe({ transform: true }))
    restPdfToCreate: RestPdfToGenerate,
    @Res({ passthrough: true }) res: any,
  ): Promise<StreamableFile> {
    const pdfBuffer: Buffer = await this.pdfService.generatePdf(
      restPdfToCreate.template,
      restPdfToCreate.variables,
      restPdfToCreate.options.toDomain(),
    );

    const title = restPdfToCreate.options.title || 'report';
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=' + title + '.pdf',
    );

    return new StreamableFile(Readable.from(pdfBuffer));
  }
}
