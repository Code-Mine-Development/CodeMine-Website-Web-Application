import {Component, OnInit, OnDestroy, NgZone, Input} from '@angular/core';
import {Employees} from '../interfaces/employees.interface';
import {MovingLayers} from '../models/movingLayers.model';
import {MouseMove} from '../models/mouseMove.model';
import {DoomRestyle} from '../models/doomRestyle.model';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
})
export class OfficeComponent implements OnInit, OnDestroy {
  topOffset: number = document.querySelector('.header')['offsetHeight'];
  windowWidth: number = window.innerWidth;
  dragging: MovingLayers = new MovingLayers();
  mouseMoving: MouseMove = new MouseMove(this.windowWidth);
  doomRestyle: DoomRestyle = new DoomRestyle();
  @Input() employees: Employees;

  constructor(ngZone: NgZone) {
    window.onresize = () => {
      ngZone.run(() => {
        this.windowWidth = window.innerWidth;
        this.mouseMoving.changeWidth(window.innerWidth);
      });
    };
  }

  ngOnInit() {
    this.doomRestyle.restyleElement(['.header', 'body'], ['color', 'overflow'], ['black', 'hidden']);
    this.mouseMoving.playAnimation();
  }

  mouseMove(event): void {
    this.mouseMoving.move(event)
  }

  mouseClick(value) {
    this.mouseMoving.setMove(value)
  }

  ngOnDestroy() {
    this.doomRestyle.restyleElement(['.header', 'body'], ['color', 'overflow'], ['', '']);
  }


}
