import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-horizontal',
  templateUrl: 'horizontal.component.html',
  styleUrls: ['horizontal.component.scss']
})
export class HorizontalComponent implements OnInit, OnChanges {
  @Input() informations;
  @Input() currentElement;
  @Input() scrollOpponent;

  prevElement = 0;
  lastElement = 0;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.prevElement = this.currentElement - 1 > 0 ? this.currentElement - 1 : null;
    this.lastElement = this.informations.length;
  }
}
