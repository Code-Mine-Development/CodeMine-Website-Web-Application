import {
  Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output,
  ViewChild
} from '@angular/core';
import {Employees} from '../../../aplication/about-us/interfaces/employees.interface';
import {Coordinate} from '../../../aplication/about-us/models/coordinate.model';
import {ClosePersonService} from '../../../shared/services/close-person.service'
@Component({
  selector: 'app-desk',
  template: `
    <div id="front" #desk>
    </div>`,
  styleUrls: ['./desk.component.scss'],
})
export class DeskComponent implements OnInit, OnChanges {
  @Input() person: Employees;
  @Input() index: number;
  @ViewChild('desk') desk;
  coordinate: Coordinate;
  deskIsActive = false;


  constructor(private closePersonService:ClosePersonService) {
   this.closePersonService.registerCloseFunction().subscribe(()=>this.closeCard());
  }

  ngOnInit() {
    const person = this.person.deskCoordinate;
    this.coordinate = new Coordinate(person.variant, person.top, person.left, this.desk);
    this.prepareCoordinates();
  }
  ngOnChanges(){

  }

  prepareCoordinates() {
    this.desk.nativeElement.style.top =  this.coordinate.offsetTop();
    this.desk.nativeElement.style.left = this.coordinate.offsetLeft();
    this.desk.nativeElement.style.transform = this.coordinate.transform();
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {

      this.coordinate.restyleDesk(true, this.index);


  }
  closeCard(){
    this.prepareCoordinates();
    this.coordinate.restyleDesk(false, this.index);


  }

}
