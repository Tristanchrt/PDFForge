import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RestPDFGenerated {
  @ApiProperty({
    description: 'Url of the generated PDF file',
    example: 'https://s3.amazonaws.com/report/my-report.pdf',
  })
  @IsNotEmpty()
  private readonly pdf_url: string;

  @ApiProperty({
    description: 'Status of the PDF generation process',
    example: 'SUCCESS',
  })
  @IsNotEmpty()
  private readonly status: string;

  constructor(pdf_url: string, status: string) {
    this.pdf_url = pdf_url;
    this.status = status;
  }
}
