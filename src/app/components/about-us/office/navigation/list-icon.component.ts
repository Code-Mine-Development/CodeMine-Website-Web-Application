import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {IconModel} from './icons.model';

@Component({
  selector: 'app-list-icon',
  template: `
    <svg viewBox=" 0 0 100 100" [class.active]="state" (click)="stateChange.emit(!state)">
      <rect class="border" x="1" y="1" width="98" height="98"/>
      <circle class="circle" cx="26.58" cy="26.31" r="5.81"/>
      <circle class="circle" cx="26.58" cy="50" r="5.81"/>
      <circle class="circle" cx="26.58" cy="73.71" r="5.81"/>
      <line class="line"
            *ngFor="let line of currentStatePoints"
            [attr.x1]="line.start.x"
            [attr.y1]="line.start.y"
            [attr.x2]="line.end.x"
            [attr.y2]="line.end.y"/>
    </svg>
  `,
  styles: [`
    :host{
      width:100%;
      height: 100%;
    }
    .circle{
      stroke:#000;
      stroke-miterlimit:10;
      stroke-width:2px;
      fill:none;
      transition:all .2s;
    }
    .line{
      stroke:#000;
      stroke-miterlimit:10;
      stroke-width:2px;
      stroke-dasharray: 0 0;
    }
    .border{
      stroke:#000;
      stroke-miterlimit:10;
      stroke-width:2px;
      fill:#fff;
    }

    .active .circle{
        transform: translate(-300%, -300%);
      }
    .active .line{
       stroke-dasharray: 6.6 6.6;
    }
  `]
})
export class ListIconComponent implements OnInit, OnChanges {
  @Input() state: boolean;
  @Output() stateChange = new EventEmitter();

  private iconModel = new IconModel();

  private duration = 300;
  currentStatePoints;
  private currentAnimationDistance;
  private RAF;
  private start;
  private progress;


  constructor() {

  }

  ngOnInit() {
    this.currentStatePoints = !this.state ? this.iconModel.getListIcon() : this.iconModel.getModelIcon();
  }

  ngOnChanges() {
    if (!this.currentStatePoints) {
      return;
    }
    this.animatePosition();
  }

  animatePosition() {
    if (this.RAF) {
      window.cancelAnimationFrame(this.RAF);
    }

    this.getDistance();
    this.start = null;
    this.progress = null;
    this.RAF = window.requestAnimationFrame(this.animationProgress.bind(this))
  }

  private getDistance() {
    this.currentAnimationDistance = [];
    const target = !this.state ? this.iconModel.getListIcon() : this.iconModel.getModelIcon();
    target.forEach(
      (point, index) => {
        this.currentAnimationDistance.push({
          start: {
            x: point.start.x - this.currentStatePoints[index].start.x,
            y: point.start.y - this.currentStatePoints[index].start.y
          },
          end: {
            x: point.end.x - this.currentStatePoints[index].end.x,
            y: point.end.y - this.currentStatePoints[index].end.y
          }
        });
      });
  }

  private animationProgress(timestamp) {
    if (!this.start) {
      this.start = timestamp;
    }

    const end = this.start + this.duration,
      progress = (timestamp - this.start) / this.duration;

    this.setPoints(progress > 1 ? 1 : progress);

    if (timestamp < end) {
      this.RAF = window.requestAnimationFrame(this.animationProgress.bind(this))
    }
  }

  setPoints(progress) {
    const currentAdd = progress - (this.progress || 0)
    this.progress = progress;
    this.currentStatePoints = this.currentStatePoints.map(
      (line, index) => {
        line.start.x += +(this.currentAnimationDistance[index].start.x * currentAdd).toFixed(2);
        line.start.y += +(this.currentAnimationDistance[index].start.y * currentAdd).toFixed(2);
        line.end.y += +(this.currentAnimationDistance[index].end.y * currentAdd).toFixed(2);
        line.end.x += +(this.currentAnimationDistance[index].end.x * currentAdd).toFixed(2);
        return line;
      })
  }


}
