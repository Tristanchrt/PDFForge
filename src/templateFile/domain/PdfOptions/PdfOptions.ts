import { PdfOptionsFormat } from './PdfOptionsFormat';
import { PdfOptionsMargin } from './PdfOptionsMargin';

export class PdfOptions {
  constructor(format: PdfOptionsFormat, margin: PdfOptionsMargin) {
    this.format = format;
    this.margin = margin;
  }

  format?: PdfOptionsFormat;
  margin?: PdfOptionsMargin;
}
