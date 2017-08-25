import {Component, OnInit, NgZone, Input, OnChanges, ViewChild, HostListener, AfterViewInit} from '@angular/core';
import {trigger, animate, transition, style} from '@angular/animations';
import {Employees} from '../interfaces/employees.interface';
import {MovingLayers} from './models/movingLayers.model';
import {MouseMove} from './models/mouseMove.model';

@Component({
  selector: 'app-office-model',
  templateUrl: './office-model.component.html',
  styleUrls: ['./office-model.component.scss'],
  animations: [
    trigger('JumpIn', [
      transition(':enter', [
        style({opacity: 0, position: 'absolute'}),
        animate( '.5s .3s ease-in-out', style({ opacity: 1}))
      ]),
      transition(':leave', [
        animate( '.5s ease-in-out', style({opacity: 0, position: 'absolute'}))
      ])
    ])
  ],
  host: { '[@JumpIn]': '' }
})
export class OfficeModelComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() employees: Employees;
  @Input() modelNavigate: string;

  @ViewChild('background') background;
  @ViewChild('deskLayer') deskLayer;

  windowWidth: number = window.innerWidth;
  dragging: MovingLayers = new MovingLayers();
  mouseMoving: MouseMove = new MouseMove(this.windowWidth);

  activeDeskPerson:Employees =  <Employees>{};


  constructor( private ngZone: NgZone ) {
  }

  @HostListener('window:resize',['$event']) onResize(){
    this.ngZone.run(() => {
      this.windowWidth = window.innerWidth;
      this.mouseMoving.changeWidth(window.innerWidth);
    });
  }

  ngOnChanges(changes) {
    if (changes && changes.modelNavigate) {
      this.dragging.resetPosition();
    }
  }

  ngAfterViewInit(){
    this.mouseMoving.setElements(this.background, this.deskLayer);
    this.dragging.setElements(this.background, this.deskLayer);
  }

  ngOnInit() {
    this.mouseMoving.playAnimation();
  }

  mouseMove(event): void {
    this.mouseMoving.move(event)
  }

  mouseClick(value) {
    this.mouseMoving.setMove(value)
  }

  getActivePerson(event) {
    if(this.activeDeskPerson && this.activeDeskPerson.name){
      return;
    }
    this.activeDeskPerson = event;
  }

  closePersonDetails(){
    this.activeDeskPerson = <Employees>{};
  }

}
