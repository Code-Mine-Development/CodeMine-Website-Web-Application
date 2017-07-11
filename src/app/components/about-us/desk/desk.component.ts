import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Employees} from '../../../aplication/about-us/interfaces/employees.interface';
import {Coordinate} from '../../../aplication/about-us/models/coordinate.model';

@Component({
  selector: 'app-desk',
  template: `
    <div id="front" #desk>
    </div>`,
  styleUrls: ['./desk.component.scss'],
})
export class DeskComponent implements OnInit {
  @Input() person: Employees;
  @Input() index: number;
  @ViewChild('desk') desk;
  coordinate: Coordinate;
  deskIsActive = false;

  constructor() {
  }

  ngOnInit() {
    const person = this.person.deskCoordinate;
    this.coordinate = new Coordinate(person.variant, person.top, person.left, this.desk);
    this.prepareCoordinates();
  }

  prepareCoordinates() {
    this.desk.nativeElement.style.top =  this.coordinate.offsetTop();
    this.desk.nativeElement.style.left = this.coordinate.offsetLeft();
    this.desk.nativeElement.style.transform = this.coordinate.transform();
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    if (!this.deskIsActive) {
      this.coordinate.restyleDesk(true, this.index);
      this.deskIsActive = true;
    }
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    console.log('leave')
  }
}
