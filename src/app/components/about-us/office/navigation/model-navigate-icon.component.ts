import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-model-navigate-icon',
  template: `
    <svg viewBox="0 0 100 100" [class.active]="state == 'maximize'" (click)="stateChange.emit(state == 'maximize' ? 'minimize' : 'maximize')">
      <rect class="bg" x="1" y="1" width="98" height="98"/>
      <polyline class="corner" points="22.51 40.17 22.51 22.51 40.06 22.51"/>
      <polyline class="corner" points="59.94 22.51 77.48 22.51 77.48 40.06"/>
      <polyline class="corner" points="77.48 59.94 77.48 77.48 59.94 77.48"/>
      <polyline class="corner" points="40.06 77.48 22.51 77.48 22.51 59.94"/>
      
    </svg>
  `,
  styles: [`
    :host{
      width:100%;
      height: 100%;
    }
    .corner{
      stroke:#000;
      stroke-miterlimit:10;
      stroke-width:2px;
      fill:none;
      transition: all .3s;
    }
    .bg{
      stroke:#000;
      stroke-miterlimit:10;
      stroke-width:2px;
      fill:#fff;
    }
    .active .corner{
      transform-origin: 50% 50%;
      transform: rotate(-180deg);
    }
    .active .corner:nth-of-type(odd){
      transform-origin: 50% 50%;
      transform: rotate(180deg);
    }
    
  `]
})
export class ModelNavigateIconComponent implements OnInit {

  @Input() state:string;
  @Output() stateChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
