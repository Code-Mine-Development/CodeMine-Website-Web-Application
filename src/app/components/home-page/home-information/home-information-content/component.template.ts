import {ScrollController} from '../../services/scroll.controller';
import {AfterViewInit, ElementRef, OnDestroy} from '@angular/core';

export interface registerElement {
  localId: number,
  title: string
}

interface LocalRegisterElement {
  id: number,
  localId: number,
  title: string
}

export abstract class ComponentTemplate implements OnDestroy, AfterViewInit {

  private duration = 1500;
  private prevElement;
  private streamSubscriber;
  private localRegisteredList: [LocalRegisterElement] = <[LocalRegisterElement]>new Array();
  private isVisible = false;

  constructor(private scrollController: ScrollController, private element: ElementRef) {
    this.setToPosition();
    this.localRegisterElements();
    this.streamSubscriber = scrollController.getCurrentElementStream().subscribe(
      (index: any) => this.parseCurrentElement(index.id)
    )
  }

  ngOnDestroy() {
    if (this.streamSubscriber)
      this.streamSubscriber.unsubscribe();
  }

  private setToPosition(){
    this.element.nativeElement.style.top = '100%';
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


    if (elementIndex && !this.isVisible) {
      this.emitShow(elementIndex.localId, directory)
      this.slideToShow();
    } else if (elementIndex && this.isVisible) {
      this.emitShow(elementIndex.localId, directory);
      this.emitHide(prevIndex.localId);
    } else if (!elementIndex && this.isVisible) {
      this.emitHide(prevIndex.localId);
      this.hideGroupBox(index);
    }


    this.isVisible = !!elementIndex;
    this.prevElement = index;
  }

  private hideGroupBox(index) {
    // const lastLocalIndex = Math.max(...this.localRegisteredList.map((element: LocalRegisterElement) => (element.localId)));
    if (index > this.prevElement)
      return this.slideUp();
    return this.slideDown();
  }

  private emitShow(id, directory) {
    this.animateShow(id, () => {
      this.scrollController.animationEnd()
    }, directory)
  }

  private emitHide(id) {
    this.animateHide(id);
  }

  private slideToShow() {
    this.element.nativeElement.style.transition = 'all ' + this.duration + 'ms ease-in-out';
    this.element.nativeElement.style.top = '0';
  }

  private slideUp() {
    const amount = this.localRegisteredList.length * 100;
    this.element.nativeElement.style.transition = 'all ' + this.duration + 'ms ease-in-out';
    this.element.nativeElement.style.top = `-${amount}%`;
  }

  private slideDown() {
    this.element.nativeElement.style.transition = 'all ' + this.duration + 'ms ease-in-out';
    this.element.nativeElement.style.top = '100%';
  }

  abstract animateShow(id, callback, directory);

  abstract animateHide(id);

  abstract registerElements(): [registerElement];

  abstract ngAfterViewInit();
}
