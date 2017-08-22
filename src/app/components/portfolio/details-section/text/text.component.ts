import {Component, OnInit, Input, HostBinding, OnChanges} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnChanges {

  @HostBinding('class.align-left') alignClass;

  @Input() texts: [{}];
  @Input() align: string;

  constructor() { }

  ngOnChanges() {
    this.alignClass = this.align === 'left';
  }

}
