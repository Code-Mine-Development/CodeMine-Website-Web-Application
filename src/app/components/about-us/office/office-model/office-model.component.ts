import {Component, OnInit, NgZone, Input, OnChanges} from '@angular/core';
import {Employees} from '../interfaces/employees.interface';
import {MovingLayers} from './models/movingLayers.model';
import {MouseMove} from './models/mouseMove.model';
import {DoomRestyle} from './models/doomRestyle.model';

@Component({
  selector: 'app-office-model',
  templateUrl: './office-model.component.html',
  styleUrls: ['./office-model.component.scss']
})
export class OfficeModelComponent implements OnInit, OnChanges {
  @Input() employees: Employees;
  @Input() modelNavigate: string;
  topOffset: number = document.querySelector('.header')['offsetHeight'];
  windowWidth: number = window.innerWidth;
  dragging: MovingLayers = new MovingLayers();
  mouseMoving: MouseMove = new MouseMove(this.windowWidth);
  doomRestyle: DoomRestyle = new DoomRestyle();

  deskActivated:number;


  constructor( ngZone: NgZone ) {
    window.onresize = () => {
      ngZone.run(() => {
        this.windowWidth = window.innerWidth;
        this.mouseMoving.changeWidth(window.innerWidth);
      });
    };
  }

  ngOnChanges(changes){
    if(changes && changes.modelNavigate)
      this.dragging.resetPosition();
  }

  ngOnInit() {
    this.doomRestyle.restyleElement(['.header', 'body'], ['color', 'overflow'], ['black', 'auto']);
    this.mouseMoving.playAnimation();
  }

  mouseMove(event): void {
    this.mouseMoving.move(event)
  }

  mouseClick(value) {
    this.mouseMoving.setMove(value)
  }

  getDeskNumber(event){
    this.deskActivated = event;
  }

}
