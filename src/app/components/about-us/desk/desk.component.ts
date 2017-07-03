import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Employees} from '../../../aplication/about-us/interfaces/employees.interface';
import {Coordinate} from '../../../aplication/about-us/models/coordinate.model';

@Component({
  selector: 'app-desk',
  template: `<div id="front" #desk><div #back id="back"></div><div #left id="left"></div></div>`,
  styleUrls: ['./desk.component.scss'],
})
export class DeskComponent implements OnInit {
  @Input() person: Employees;
  @ViewChild('desk') desk;
  @ViewChild('back') back;
  @ViewChild('left') left;
  coordinate: Coordinate;

  constructor() {
  }

  ngOnInit() {
    const person = this.person.deskCoordinate;
    this.coordinate = new Coordinate(person.variant, person.top, person.left, this.desk, this.back, this.left);
    this.prepareCoordinates();
  }

  prepareCoordinates() {
    this.desk.nativeElement.style.top =  this.coordinate.offsetTop();
    this.desk.nativeElement.style.left = this.coordinate.offsetLeft();
    this.desk.nativeElement.style.transform = this.coordinate.transform();
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.coordinate.restyleDesk(true);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    console.log('leave')
  }
}
