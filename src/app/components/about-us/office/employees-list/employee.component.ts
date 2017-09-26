import {Component, Input, OnInit, HostBinding, HostListener} from '@angular/core';
import {EventManager} from '../event_manager';
import {Employees} from '../../../../aplication/about-us/interfaces/employees.interface';

@Component({
  selector: 'app-employee',
  template: `
    <div class="image">
      <figure>
        <img [src]="'assets/images/people/'+person.image.normal" alt="Photo of someone from team">
        <figcaption>{{person.name}} Photo</figcaption>
        <svg class="cover" viewBox="0,0 1,1">
          <polygon points="0,0 1,1 0,1" fill="#FFDE07"></polygon>
        </svg>
      </figure>
    </div>
    <section class="vcard">
          <h3>{{person.name  | translate}}</h3>
          <p>{{person.position  | translate}}</p>
    </section>

  `,
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  @Input() person: Employees;
  @Input() eventManager: EventManager;

  @HostBinding('class.hover') hover = false;

  private clicked = false;

  constructor() {
  }

  @HostListener('mouseenter', []) onMouseEnter() {
    this.eventManager.emit('hover', this.person)
  }

  @HostListener('mouseleave', []) onMouseLeave() {
    this.eventManager.emit('hover', null)
  }

  @HostListener('click', []) onMouseClick() {
    this.eventManager.emit('click', this.person);
  }

  ngOnInit() {
    this.eventManager.on('hover', (person) => this.onHover(person));
    this.eventManager.on('click', (person) => this.onClick(person));
  }

  onHover(person: Employees) {
    this.hover = this.clicked || person === this.person;
  }

  onClick(person: Employees) {
    this.clicked = person === this.person;
    this.onHover(person);
  }

}
