export class PdfOptionsMargin {
  constructor(top: string, bottom: string, left: string, right: string) {
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
