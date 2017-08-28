import {ScrollController} from '../../services/scroll.controller';
import {AfterViewInit, ElementRef, OnDestroy} from '@angular/core';

export interface RegisterElement {
  localId: number,
  title: string
}

interface LocalRegisterElement {
  id: number,
  localId: number,
  title: string
}

export abstract class ComponentTemplate implements OnDestroy, AfterViewInit {

  private prevElement;
  private streamSubscriber;
  private localRegisteredList: [LocalRegisterElement] = <[LocalRegisterElement]>[];
  private isVisible = false;

  constructor(private scrollController: ScrollController, private element: ElementRef) {
    this.localRegisterElements();
    this.streamSubscriber = scrollController.getCurrentElementStream().subscribe(
      (index: any) => this.parseCurrentElement(index.id)
    )
  }

  ngOnDestroy() {
    if (this.streamSubscriber) {
      this.streamSubscriber.unsubscribe();
    }
  }


  private localRegisterElements() {
    const elementsList = this.registerElements();

    elementsList.forEach(
      (localRegister) => {
        const id = this.scrollController.registerElement(localRegister.title);
        this.localRegisteredList.push({
          id,
          title: localRegister.title,
          localId: localRegister.localId
        })
      }
    );
  }

  private parseCurrentElement(index) {
    const elementIndex = this.localRegisteredList.find((element: LocalRegisterElement) => (element.id === index)),
      prevIndex = this.localRegisteredList.find((element: LocalRegisterElement) => (element.id === this.prevElement)),
      directory = index > this.prevElement ? 'down' : 'up';

    this.setPosition(index);

    if (elementIndex && !this.isVisible) {
      this.emitShow(elementIndex.localId, directory)
    } else if (elementIndex && this.isVisible) {
      this.emitShow(elementIndex.localId, directory);
      this.emitHide(prevIndex.localId, directory);
    } else if (!elementIndex && this.isVisible) {
      this.emitHide(prevIndex.localId, directory);
    }


    this.isVisible = !!elementIndex;
    this.prevElement = index;
  }


  private emitShow(id, directory) {
    this.animateShow(id, () => {
      this.scrollController.animationEnd()
    }, directory)
  }

  private emitHide(id, directory) {
    this.animateHide(id, directory);
  }

  private setPosition(index) {
    const amount = index > 6 ? (index - 2) * 100 : (index - 1) * 100;
    this.element.nativeElement.style.transform = `translateY(-${amount}%)`;
  }

  abstract animateShow(id, callback, directory);

  abstract animateHide(id, directory);

  abstract registerElements(): [RegisterElement];

  abstract ngAfterViewInit();
}
