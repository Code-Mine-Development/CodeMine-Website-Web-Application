import {Component, OnInit, Input} from '@angular/core';

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
            <!--<span class="since">{{'PEOPLE.worksince' | translate}} {{people}} </span>-->
        </span> 
      </p>
    </section>
    
  `,
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input('person') person;

  descriptionVisible = false;

  constructor() { }

  ngOnInit() {
  }

  show(){
    this.descriptionVisible = true;
  }

  hide(){
    this.descriptionVisible = false;
  }

}
