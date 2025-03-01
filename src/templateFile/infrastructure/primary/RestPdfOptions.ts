import { ApiPropertyOptional } from '@nestjs/swagger';
import { PdfOptions } from '../../domain/PdfOptions/PdfOptions';
import { PdfOptionsFormat } from '../../domain/PdfOptions/PdfOptionsFormat';
import { PdfOptionsMargin } from '../../domain/PdfOptions/PdfOptionsMargin';

class RestPdfMargin {
  @ApiPropertyOptional({ description: 'Top margin', example: '10px' })
  top?: string;

  @ApiPropertyOptional({ description: 'Bottom margin', example: '10px' })
  bottom?: string;

  @ApiPropertyOptional({ description: 'Left margin', example: '10px' })
  left?: string;

  @ApiPropertyOptional({ description: 'Right margin', example: '10px' })
  right?: string;
}

export class RestPdfOptions {
  @ApiPropertyOptional({ description: 'Title of the document', example: 'My PDF Report' })
  title?: string;

  @ApiPropertyOptional({ description: 'Scale factor for the document', example: 1 })
  scale?: number;

  @ApiPropertyOptional({ description: 'Whether to display header and footer', example: true })
  displayHeaderFooter?: boolean;

  @ApiPropertyOptional({ description: 'HTML template for the header' })
  headerTemplate?: string;

  @ApiPropertyOptional({ description: 'HTML template for the footer' })
  footerTemplate?: string;

  @ApiPropertyOptional({ description: 'Print background graphics', example: true })
  printBackground?: boolean;

  @ApiPropertyOptional({ description: 'Landscape mode', example: false })
  landscape?: boolean;

  @ApiPropertyOptional({ description: 'Page ranges to print', example: '1-3,5' })
  pageRanges?: string;

  @ApiPropertyOptional({ description: 'Page format', example: 'A4', enum: PdfOptionsFormat })
  format?: PdfOptionsFormat;

  @ApiPropertyOptional({ description: 'Width of the document', example: '210mm' })
  width?: string | number;

  @ApiPropertyOptional({ description: 'Height of the document', example: '297mm' })
  height?: string | number;

  @ApiPropertyOptional({ description: 'Prefer CSS-defined page size', example: true })
  preferCSSPageSize?: boolean;

  @ApiPropertyOptional({ type: RestPdfMargin, description: 'Margins for the document' })
  margin?: RestPdfMargin;

  @ApiPropertyOptional({ description: 'Path to save the PDF file' })
  path?: string;

  @ApiPropertyOptional({ description: 'Omit background graphics', example: false })
  omitBackground?: boolean;

  @ApiPropertyOptional({ description: 'Enable tagged PDF for accessibility', example: true })
  tagged?: boolean;

  @ApiPropertyOptional({ description: 'Include an outline in the PDF', example: false })
  outline?: boolean;

  @ApiPropertyOptional({ description: 'Timeout in milliseconds for PDF generation', example: 30000 })
  timeout?: number;

  @ApiPropertyOptional({ description: 'Wait for fonts to load before rendering', example: true })
  waitForFonts?: boolean;

  toDomain() {
    return new PdfOptions(
      this.format,
      this.margin
        ? new PdfOptionsMargin(
            this.margin.top,
            this.margin.bottom,
            this.margin.left,
            this.margin.right,
          )
        : undefined,
    );
  }
}
