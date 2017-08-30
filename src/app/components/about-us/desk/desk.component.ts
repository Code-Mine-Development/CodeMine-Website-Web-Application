import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output,
  ViewChild, ElementRef
} from '@angular/core';
import {Employees} from '../../../aplication/about-us/interfaces/employees.interface';
import {Coordinate} from '../office/office-model/models/coordinate.model';
@Component({
  selector: 'app-desk',
  template: `
    <div class="front" [class.horizontal]="person.deskCoordinate.variant === 1" #desk (click)="throwOpenPersonDetails()">
      <div class="deskOwner">
        <div class="col2" id="col">
          <img [src]="'assets/images/people/'+person.image.normal" [alt]="person.name">
        </div>
        <div class="col2">
          <div class="details">
           <h4>{{person.name}}</h4>a
            <h4>{{person.surname}}</h4>
          </div>
        </div>
      </div>
    </div>`,
  styleUrls: ['./desk.component.scss'],
})
export class DeskComponent implements OnInit, OnChanges {
  @Input() person: Employees;
  @Input() bg: Element;
  @Input() activePerson;
  @Output() personActivated = new EventEmitter();

  @ViewChild('desk') desk;
  coordinate: Coordinate;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.coordinate = new Coordinate(this.person.deskCoordinate, this.elementRef, this.bg);
    this.prepareCoordinates();
  }

  ngOnChanges() {
    if (this.activePerson && this.activePerson.name === this.person.name && this.activePerson.surname === this.person.surname) {
      this.openCard();
    } else {
      this.closeCard();
    }
  }

  prepareCoordinates() {
    this.elementRef.nativeElement.style.top = this.coordinate.offsetTop();
    this.elementRef.nativeElement.style.left = this.coordinate.offsetLeft();
    this.elementRef.nativeElement.style.transform = this.coordinate.transform();
  }

  throwOpenPersonDetails() {
    this.personActivated.emit(this.person);
  }

  openCard() {
    this.coordinate.showDetails();
  }

  closeCard() {
    if (!this.coordinate) {
      return;
    }
    this.prepareCoordinates();
    this.coordinate.moveDown();
  }

}
