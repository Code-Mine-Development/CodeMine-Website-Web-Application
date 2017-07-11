export class DoomRestyle {
  constructor() {}
  restyleElement(elem: Array<string>, className: Array<string>, classValue: Array<string>): void {
    elem.forEach((domElement, index) => {
      const item = document.getElementsByTagName(domElement);
      item[0]['style'][className[index]] = classValue[index];
    });
  }
}
