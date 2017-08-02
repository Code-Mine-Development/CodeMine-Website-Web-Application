import {Component, OnInit, NgZone, Input, OnChanges} from '@angular/core';
import {trigger, animate, transition, style} from '@angular/animations';
import {Employees} from '../interfaces/employees.interface';
import {MovingLayers} from './models/movingLayers.model';
import {MouseMove} from './models/mouseMove.model';
import {DoomRestyle} from './models/doomRestyle.model';


@Component({
  selector: 'app-office-model',
  templateUrl: './office-model.component.html',
  styleUrls: ['./office-model.component.scss'],
  animations:[
    trigger("JumpIn",[
      transition(":enter",[
        style({transform: "scale(0.3)", opacity:0, position: 'absolute'}),
        animate( '.5s .3s ease-in-out', style({transform: "*", opacity:1}))
      ]),
      transition(":leave",[
        animate( '.5s ease-in-out', style({transform: "scale(0.3)", opacity:0, position: 'absolute'}))
      ])
    ])
  ],
  host:{ '[@JumpIn]':'' }
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
