import {Component, Input, OnInit, HostBinding, HostListener} from '@angular/core';
import {EventManager} from '../../../../shared/services/event_manager';
import {Employees} from '../../../../aplication/about-us/interfaces/employees.interface';

@Component({
  selector: 'app-employee',
  template: `
    <div class="worker">
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
              <h3>{{person.name  | translate | prettifyText}}</h3>
              <p>{{person.position  | translate | prettifyText}}</p>
        </section>
        <div class="right-arrow" (click)="changeVisibleDescription($event)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.07 20.5">
            <polyline [class.visible]="!showDescription" fill="none" stroke="#FFFFFF" stroke-miterlimit = "10" stroke-width="6.32px" points="29.84 2.23 16.04 16.04 2.23 2.23"/>
            <polyline [class.visible]="showDescription"fill="none" stroke="#FFDE07" stroke-miterlimit = "10" stroke-width="6.32px" points="29.84,16.04 16.04,3.5 2.23,16.04"/>
          </svg>
        </div>
    </div>
    <p class="description" [class.visible]="showDescription">{{person.description | translate | prettifyText}}</p>
  `,
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input() person: Employees;
  @Input() eventManager: EventManager;

  @HostBinding('class.hover') hover = false;

  private clicked = false;

  private showDescription = false;


  @HostListener('mouseenter', []) onMouseEnter() {
    this.eventManager.emit('hover', this.person)
  }

  @HostListener('mouseleave', []) onMouseLeave() {
    this.eventManager.emit('hover', null)
  }

  @HostListener('click', []) onMouseClick() {
    this.eventManager.emit('click', this.person);
  }

  changeVisibleDescription(event){
    event.stopPropagation();
    if(!this.clicked){
      this.eventManager.emit('click', this.person);
    } else {
      this.eventManager.emit('click', null)
    }
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
    if (this.detectMobile() && this.clicked) {
      this.showDescription = true;
    }  else {
      this.showDescription = false;
    }
  }

  detectMobile() {
    return window.innerWidth <= 576;
  }

}
