import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as mustache from 'mustache';

@Injectable()
export class PdfService {
  async generatePdf(
    template: string,
    variables: object,
    options: any,
  ): Promise<Buffer> {
    const filledTemplate = mustache.render(template, variables);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(filledTemplate);

    const pdfUint8Array = await page.pdf({
      format: options.format || 'A4',
      margin: options.margin,
    });
    const pdfBuffer = Buffer.from(pdfUint8Array);

    await browser.close();
    return pdfBuffer;
  }
}
