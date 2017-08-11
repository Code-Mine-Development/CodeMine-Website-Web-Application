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
        <div class="col2" id="col">
          <img [src]="'assets/images/people/'+person.image.normal" [alt]="person.name">
        </div>
        <div class="col2">
          <div class="details">
           <h4>{{person.name}}</h4>
            <h4>{{person.surname}}</h4>
          </div>
        </div>
      </div>
    </div>`,
  styleUrls: ['./desk.component.scss'],
})
export class DeskComponent implements OnInit {
  @Input() person: Employees;
  @Input() index: number;
  @ViewChild('desk') desk;
  coordinate: Coordinate;
  @Output() personActivated = new EventEmitter<number>();
  @Input() people: Employees;

  constructor(private closePersonService: ClosePersonService) {
   this.closePersonService.registerCloseFunction().subscribe(() => this.closeCard());
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

  @HostListener('mouseenter') mouseover() {
    if (this.coordinate.deskClicked == false){
      this.coordinate.hoverDesk(this.index);
        this.personActivated.emit(
          this.index
        );
    }
  }

  @HostListener('mouseleave') deskBack() {
    if (this.coordinate.deskClicked == false) {
      this.coordinate.hoverOutDesk(this.index);
    }
  }

  openPersonDetails(){
    this.coordinate.showDetails(this.index);
  }

  closeCard(){
    this.prepareCoordinates();
    this.coordinate.moveDown(this.index);
  }

}
