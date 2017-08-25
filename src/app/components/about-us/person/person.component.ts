import {Component, HostListener, Input, EventEmitter, Output, OnChanges, HostBinding} from '@angular/core';
import {ClosePersonService} from '../../../shared/services/close-person.service';
import {Employees} from '../../../aplication/about-us/interfaces/employees.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnChanges {

  @Input() person: Employees;
  @Output() close = new EventEmitter();

  @HostBinding('class.visible') visible;

  visibleElement;

  constructor(private closePersonService: ClosePersonService) {
  }

  @HostListener('window:keydown', ['$event']) closePerson(event) {
    if (event.keyCode === 27) {
      this.closePersonService.triggerClose();
    }
  }

  ngOnChanges() {
    if( this.person && this.person.name ){
      this.visible = true;
      this.visibleElement = this.person
    } else {
      this.visible = false;
    }
  }

  closeButtonClicked() {
    this.close.emit();
  }

}

