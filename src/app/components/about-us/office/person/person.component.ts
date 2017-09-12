import {Component, HostListener, Input, OnChanges, HostBinding, OnInit} from '@angular/core';
import {EventManager} from '../event_manager';
import {Employees} from '../interfaces/employees.interface';

@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() eventManager: EventManager;

  @HostBinding('class.visible') visible;

  visibleElement;

  constructor() {
  }

  @HostListener('window:keydown', ['$event']) closePerson(event) {
    if (event.keyCode === 27) {
      this.closeButtonClicked();
    }
  }

  ngOnInit() {
    this.eventManager.on('click', (person) => this.showPerson(person))
  }

  showPerson(person: Employees) {
    this.visibleElement = person;
    this.visible = !!person;
    console.log('Object Visible ', !!person)
  }

  closeButtonClicked() {
    this.eventManager.emit('click', null);
  }

}

