import { RestPdfOptions } from '../../../../src/templateFile/infrastructure/primary/RestPdfOptions';
import { PdfOptions } from '../../../../src/templateFile/domain/PdfOptions/PdfOptions';
import { PdfOptionsMargin } from '../../../../src/templateFile/domain/PdfOptions/PdfOptionsMargin';
import { PdfOptionsFormat } from '../../../../src/templateFile/domain/PdfOptions/PdfOptionsFormat';

describe('Rest pdf options', () => {
  it('should transform RestPdfOptions to PdfOptions', () => {
    const restOptions = new RestPdfOptions();
    restOptions.format = PdfOptionsFormat.A4;
    restOptions.margin = {
      top: '10px',
      bottom: '20px',
      left: '15px',
      right: '15px',
    };

    const domainOptions = restOptions.toDomain();

    expect(domainOptions).toBeInstanceOf(PdfOptions);
    expect(domainOptions.format).toEqual('A4');
    expect(domainOptions.margin).toBeInstanceOf(PdfOptionsMargin);
    expect(domainOptions.margin?.top).toEqual('10px');
    expect(domainOptions.margin?.bottom).toEqual('20px');
    expect(domainOptions.margin?.left).toEqual('15px');
    expect(domainOptions.margin?.right).toEqual('15px');
  })
});