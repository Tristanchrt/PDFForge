export interface RestPdfOptions {
  title?: string;
  scale?: number;
  displayHeaderFooter?: boolean;
  headerTemplate?: string;
  footerTemplate?: string;
  printBackground?: boolean;
  landscape?: boolean;
  pageRanges?: string;
  format?: 'A4' | 'Letter' | string;
  width?: string | number;
  height?: string | number;
  preferCSSPageSize?: boolean;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  path?: string;
  omitBackground?: boolean;
  tagged?: boolean;
  outline?: boolean;
  timeout?: number;
  waitForFonts?: boolean;
}
