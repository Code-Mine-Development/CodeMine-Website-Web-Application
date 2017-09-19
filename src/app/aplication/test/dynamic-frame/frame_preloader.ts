import {Renderer2} from '@angular/core';


export class PNGFramePreloader {

  private static makeIterator(filePath: string, id: number, radius: number) {
    const fileArray = [],
      maxLength = (2 * radius),
      currentPosition = 1;
    let nextIndex = 0;

    fileArray.push(PNGFramePreloader.createIteratorObject(filePath, id));

    while (fileArray.length < maxLength) {
      fileArray.push(PNGFramePreloader.createIteratorObject(filePath, id + currentPosition));
      if (id - currentPosition > 0) {
        fileArray.push(PNGFramePreloader.createIteratorObject(filePath, id - currentPosition));
      }
    }

    return {
      next: function () {
        return nextIndex < fileArray.length ?
          {value: fileArray[nextIndex++], done: false} :
          {done: true};
      }
    };
  }

  private static createIteratorObject(filePath, id) {
    return filePath + PNGFramePreloader.parseId(id) + '.png';
  }

  private static parseId(index: number) {
    let id;
    if (index < 10) {
      id = '000' + index
    } else if (index < 100) {
      id = '00' + index;
    } else if (index < 1000) {
      id = '0' + index;
    } else if (index < 10000) {
      id = index
    }
    return id;
  }


  constructor(private renderer: Renderer2, private filePath: string, private radius: number) {
  }

  addLoader(id) {
    const iterator = PNGFramePreloader.makeIterator(this.filePath, id, this.radius),
      element = this.renderer.createElement('img');
    let iteratorNext: any = iterator.next();

    this.renderer.listen(element, 'load', () => {

      iteratorNext = iterator.next();
      element.src = iteratorNext.done ? '' : iteratorNext.value;

      if (iteratorNext.done) {
        this.renderer.destroyNode(element);
      }
    });

    element.src = iteratorNext.done ? '' : iteratorNext.value;
  }

  getPath(frame: number) {
    return PNGFramePreloader.createIteratorObject(this.filePath, frame);
  }

}
