import {Component, OnInit, OnDestroy, NgZone, Input} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'
import {Employees} from "../interfaces/employees.interface";

interface SmoothMove {
  lFollowX: number,
  lMouseX: number,
  lFollowY: number,
  lMouseY: number,
  x: number,
  y: number,
  friction: number,
  translate: string
}

const data: SmoothMove = {
  lFollowX: 0,
  lMouseX: 0,
  lFollowY: 0,
  lMouseY: 0,
  x: 0,
  y: 0,
  friction: 1 / 30,
  translate: '0px'
};

function smoothMoveAnimation() {
  data.x += (data.lFollowX - data.x) * data.friction;
  data.y += (data.lFollowY - data.y) * data.friction;
  data.translate = 'translate(' + data.x + 'px, ' + data.y + 'px) scale(1.1)';

  const bg = document.getElementById('officeBg');
  const desks = document.getElementById('deskLayer');
  bg['style']['transform'] = data.translate;
  desks['style']['transform'] = data.translate;
  window.requestAnimationFrame(smoothMoveAnimation);
}

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
  animations: [
    trigger('arrow', [
      state('down', style({
        'font-size': '15px',
        'transform': 'translateY(0)'
      })),
      state('up', style({
        'font-size': '17px',
        'transform': 'translateY(-5px)'
      })),

      transition('down <=> up', animate(800)),
    ])
  ]
})
export class OfficeComponent implements OnInit, OnDestroy {
  state = 'down';
  topOffset: number = document.querySelector('header')['offsetHeight'];
  windowWidth: number = window.innerWidth;
  arrowInterval: any;
  @Input() employees: Employees;


  constructor(ngZone: NgZone) {
    window.onresize = () => {
      ngZone.run(() => {
        this.windowWidth = window.innerWidth;
      });
    };
  }

  ngOnInit() {
    this.restyleElement(['header', 'body'], ['color', 'overflow'], ['white', 'hidden']);
    smoothMoveAnimation();
  }

  /**
   *
   * detect mouse move event
   * @param event
   */
  mouseMove(event): void {
    data.lMouseX = Math.max(-100, Math.min(100, this.windowWidth / 2 - event.clientX));
    data.lMouseY = Math.max(-100, Math.min(100, this.windowWidth / 2 - event.clientY));
    data.lFollowX = (20 * data.lMouseX) / 100;
    data.lFollowY = (20 * data.lMouseY) / 100;
  }

  /**
   *
   * @param elem
   * @param className
   * @returns {any}
   */
  restyleElement(elem: Array<string>, className: Array<string>, classValue: Array<string>): void {
    elem.forEach((domElement, index) => {
      const item = document.getElementsByTagName(domElement);
      item[0]['style'][className[index]] = classValue[index];
    });
  }

  moveArrow(value: boolean): void {
    if (value) {
      this.state = 'up';
      this.arrowInterval = setInterval(() => {
        this.state === 'down' ? this.state = 'up' : this.state = 'down';
      }, 800)
    } else {
      clearInterval(this.arrowInterval);
      this.state = 'down';
      this.arrowInterval = null;
    }
  }

  /**
   *
   * scroll down and remove styles from DOOM
   */
  scrollDown(): void {

  }


  ngOnDestroy() {
    this.restyleElement(['header', 'body'], ['color', 'overflow'], ['', '']);
  }

}
