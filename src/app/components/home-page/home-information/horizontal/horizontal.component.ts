import {Component, OnInit} from '@angular/core';
import {ScrollController} from '../../services/scroll.controller';

@Component({
  selector: 'app-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.scss']
})
export class HorizontalComponent implements OnInit {

  private element;

  constructor( private scrollController:ScrollController ) {
    scrollController.getCurrentElementStream().subscribe(
      (element)=>{
        this.element = element;
        this.element.quantity = scrollController.getElementsQuantity();
      }
    )
  }

  ngOnInit() {
  }

  moveToLast(){
    this.scrollController.moveToLast();
  }

  moveToPrev(){
    this.scrollController.move('up');
  }
}
