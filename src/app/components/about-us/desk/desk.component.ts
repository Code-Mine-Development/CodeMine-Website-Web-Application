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
    <div id="front" #desk (click)="openPersonDetails()">
      <div class="deskOwner">
        <div class="col2">
          <img src="../../../../assets/images/persons/rodo.png" alt="Asia">
        </div>
        <div class="col2">
          <div class="details">
           <h4>{{people[index].name}}</h4>
            <h4>{{people[index].surname}}</h4>
          </div>
        </div>
      
      </div>
    </div>`,
  styleUrls: ['./desk.component.scss'],
})
export class DeskComponent implements OnInit, OnChanges {
  @Input() person: Employees;
  @Input() index: number;
  @ViewChild('desk') desk;
  coordinate: Coordinate;
  @Output() personActivated = new EventEmitter<number>();
  deskIsActive:boolean;
  @Input() people:Employees;

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
    let deskOwner = <HTMLElement>document.getElementsByClassName("deskOwner")[this.index];
    deskOwner.style.opacity = "0";
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {

      this.coordinate.restyleDesk(true, this.index);
      this.personActivated.emit(
        this.index
      );


  }
  openPersonDetails(){
    this.coordinate.showDetails(this.index);
  }
  @HostListener('mouseleave') deskBack() {
    console.log("left");
    this.prepareCoordinates();
}

  closeCard(){
    this.prepareCoordinates();
    this.coordinate.restyleDesk(false, this.index);
    this.deskIsActive=false;
  }

}
