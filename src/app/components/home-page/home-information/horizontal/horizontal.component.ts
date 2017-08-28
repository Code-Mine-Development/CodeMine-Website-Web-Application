import {Component, HostListener, AfterViewInit} from '@angular/core';
import {ScrollController} from '../../services/scroll.controller';

@Component({
  selector: 'app-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.scss']
})
export class HorizontalComponent implements AfterViewInit {

  hidden = false;
  element;
  private breakPoint = 500;
  private verticalBreakPoint = 800;

  constructor(private scrollController: ScrollController) {
    scrollController.getCurrentElementStream().subscribe(
      (element) => {
        this.element = element;
        this.element.quantity = scrollController.getElementsQuantity();
      }
    )
  }

  @HostListener('window:resize', ['$event']) resize() {
    this.checkScreen();
  }

  ngAfterViewInit() {
    this.checkScreen();
  }

  checkScreen() {
    if (window.innerWidth < window.innerHeight) {
      this.hidden = window.innerWidth <= this.breakPoint;
    } else {
      this.hidden = window.innerWidth <= this.verticalBreakPoint;
    }
  }

  moveToLast() {
    this.scrollController.moveToLast();
  }

  moveToPrev() {
    this.scrollController.move('up');
  }
}
