import {Component, HostListener, ElementRef, OnInit} from '@angular/core';
import {ScrollController} from '../../services/scroll.controller';

@Component({
  selector: 'app-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.scss']
})
export class HorizontalComponent implements OnInit {

  hidden = false;

  constructor(private scrollController: ScrollController, private element: ElementRef) {
    // scrollController.getCurrentElementStream().subscribe(
    //   (element) => {
    //     this.element = element;
    //     this.element.quantity = scrollController.getElementsQuantity();
    //   }
    // )
  }

  @HostListener('scroll', []) resize() {
    this.setScroll();
  }

  ngOnInit() {
  }


  setScroll() {
    // this.element.nativeElement
  }

  // moveToLast() {
  //   this.scrollController.moveToLast();
  // }
  //
  // moveToPrev() {
  //   this.scrollController.move('up');
  // }
}
