import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-employee',
  template: `
    <figure>
      <img [src]="'assets/images/people/'+person.image.normal" alt="Photo of someone from team">
      <figcaption>{{person.name}} Photo</figcaption>
    </figure>
    <section [class.desc-visible]="descriptionVisible">
      <h1>{{person.name + " " + person.surname}}</h1>
      <h2>{{person.position}}</h2>
      <hr>
      <p>
        <button (click)="show()" class="show">
          {{'ABOUT_US.showDescription' | translate}}
        </button>
        <button (click)="hide()" class="close">
          <span class="fa fa-times" aria-hidden="true" ></span>{{'ABOUT_US.closeDescription' | translate}}
        </button>
        <span class="description">
            {{person.description | translate}}
        </span>
      </p>
    </section>

  `,
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnChanges {

  @Input() person;
  @Input() currentVisible;
  @Output() visible = new EventEmitter();

  descriptionVisible = false;

  constructor() {
  }

  ngOnChanges() {
    if (this.currentVisible !== this.getId()) {
      this.descriptionVisible = false;
    }
  }

  show() {
    this.descriptionVisible = true;
    this.visible.emit(this.getId());
  }

  hide() {
    this.descriptionVisible = false;
  }

  getId() {
    return this.person.name + this.person.surname;
  }

}
