import {Component, Input, ElementRef, HostListener} from '@angular/core';
import {Employees} from '../../interfaces/employees.interface';
import {EventManager} from '../../event_manager';
@Component({
  selector: 'app-desk',
  template: `<section class="desk horizontal"></section>`,
  styleUrls: ['desk.component.scss'],
})
export class DeskComponent {
  @Input() person: Employees;
  @Input() eventManager: EventManager;


  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter') mouseEnter() {
    this.eventManager.emit('hover', this.person)
  }


  @HostListener('mouseleave') mouseLeave() {
    this.eventManager.emit('hover', null)
  }


  ngOnInit() {
    this.eventManager.on('hover', (person) => this.isHover(person));
    this.prepareCoordinates();
  }


  isHover(person: Employees) {
    if (person === this.person) {
      console.log("hovered");
    } else {
      console.log("not hovered")
    }
  }

  prepareCoordinates() {
    this.elementRef.nativeElement.style.top = this.person.deskCoordinate.top + "%";
    this.elementRef.nativeElement.style.left = this.person.deskCoordinate.left + "%";
  }

  throwOpenPersonDetails() {
    // this.personActivated.emit(this.person);
  }

  openCard() {
    // this.coordinate.showDetails();
  }

  closeCard() {
    // if (!this.coordinate) {
    //   return;
    // }
    this.prepareCoordinates();
    // this.coordinate.moveDown();
  }

}
