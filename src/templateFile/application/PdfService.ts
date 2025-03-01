import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as mustache from 'mustache';
import { PdfOptions } from '../domain/PdfOptions/PdfOptions';
import { PaperFormat } from 'puppeteer';

@Injectable()
export class PdfService {
  async generatePdf(
    template: string,
    variables: object,
    options: PdfOptions,
  ): Promise<Buffer> {
    const filledTemplate = mustache.render(template, variables);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(filledTemplate);

    const A4 = 'A4';
    const pdfUint8Array = await page.pdf({
      format: (options.format as PaperFormat) || A4,
      margin: options.margin,
    });
    const pdfBuffer = Buffer.from(pdfUint8Array);

    await browser.close();
    return pdfBuffer;
  }
}
