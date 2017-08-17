export class DoomRestyle {
  constructor() {}
  restyleElement(elem: Array<string>, className: Array<string>, classValue: Array<string>): void {
    elem.forEach((domElement, index) => {
      const item = document.querySelector(domElement);
      item['style'][className[index]] = classValue[index];
    });
  }
}
