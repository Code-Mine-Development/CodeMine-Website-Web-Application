import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-list-icon',
  template: `
    <svg viewBox=" 0 0 100 100" [class.active]="state" (click)="stateChange.emit(!state)">
      <rect class="border" x="1" y="1" width="98" height="98"/>
      <circle class="circle" cx="26.58" cy="26.31" r="5.81"/>
      <circle class="circle" cx="26.58" cy="50" r="5.81"/>
      <circle class="circle" cx="26.58" cy="73.71" r="5.81"/>
      <line *ngFor="let line of FirstStatePoints" class="line" [attr.x1]="line.start.x" [attr.y1]="line.start.y" [attr.x2]="line.end.x" [attr.y2]="line.end.y"/>
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
  @Input() state:boolean;
  @Output() stateChange = new EventEmitter();
  private duration = 500;

  private FirstStatePoints = [
    {
      start: { x: 41.82, y: 26.30 },
      end: { x:79.23, y:26.30}
    },
    {
      start: { x: 41.82, y: 50 },
      end: { x:79.23, y:50}
    },
    {
      start: { x: 41.82, y: 73.01 },
      end: { x:79.23, y:73.01}
    }
  ];
  private SecondStatePoint = [
    {
      start: { x: 0, y: 100 },
      end: { x:50, y:50}
    },
    {
      start: { x: 50, y: 0 },
      end: { x:50, y:50}
    },
    {
      start: { x: 100, y: 100 },
      end: { x:50, y:50}
    }
  ];
  private currentStatePoints;
  private currentAnimationDistance;
  private RAF;
  private start;

  constructor() { }

  ngOnInit() {
    this.currentStatePoints = Object.assign(!this.state ? this.FirstStatePoints: this.SecondStatePoint);
  }

  ngOnChanges(){
    if(!this.currentStatePoints)
      return;

    this.animatePosition()
  }

  animatePosition(){
    if(this.RAF)
      window.cancelAnimationFrame(this.RAF);
    this.getDistance();
    this.start = null;
    this.RAF = window.requestAnimationFrame(this.animationProgress.bind(this))
  }

  private getDistance(){
    this.currentAnimationDistance = [];
    let target = this.state ? this.FirstStatePoints : this.SecondStatePoint;

    target.forEach(
      ( point, index ) => {
        this.currentAnimationDistance.push({
          start: {
            x: point.start.x - this.currentStatePoints[index].start.x,
            y: point.start.y - this.currentStatePoints[index].start.y
          },
          end: {
            x: point.end.x - this.currentStatePoints[index].end.x,
            y: point.end.y - this.currentStatePoints[index].end.y
          }
        })

      });
    console.log(this.currentAnimationDistance);
  }

  private animationProgress(timestamp){
    if(!this.start) this.start = timestamp;
    let end = this.start + this.duration,
        progress = (timestamp - this.start) / this.duration;

    this.setPoints(progress);

    if( timestamp < end )
      this.RAF = window.requestAnimationFrame(this.animationProgress.bind(this))
  }

  setPoints(progress){
    this.currentStatePoints.forEach(
      ( point, index ) => {
        // tutej to ciulstwonn
      }
    )
  }

}
