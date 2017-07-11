import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Output() showCard = new EventEmitter<{closeItem:boolean}>() ;
  showItem:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onCloseClick() {
    this.showCard.emit({
      closeItem: !this.showItem
    });
  }
}
