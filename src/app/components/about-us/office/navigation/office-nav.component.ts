import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-office-nav',
  template: `
    <nav>
      <ul>
            <li>
              <app-list-icon [state]="showList" (stateChange)="setShowListStatus($event)"></app-list-icon>
             </li>
            <li *ngIf="checkFirefox()">
              <app-model-navigate-icon [class.disabled]="showList"
                                       [state]="modelNavigate"
                                       (stateChange)="setModelNavigate($event)"
                                       ></app-model-navigate-icon>
             </li>
      </ul>
    </nav>
  `,
  styles: [`
    nav{
      position:absolute;
      bottom:5%;
      right: 5%;
    }
    ul{
      width:68px;
      padding:0;
      margin:0;
      list-style: none;
    }
    li{
      width:100%;
      height: 68px;
      padding: 15px 0 0;
      cursor: pointer;
      transition:opacity .3s;
      opacity:1;
    }
    img{
      width:100%;
      height: 100%;
    }
    .disabled{
      opacity:0.6;
    }
  `]
})
export class OfficeNavComponent {

  @Output() showListChange = new EventEmitter();
  @Output() modelNavigateChange = new EventEmitter();

  @Input() showList: boolean;
  @Input() modelNavigate: string;

  constructor() { }

  setShowListStatus(status) {
    this.showList = status;
    this.showListChange.emit(this.showList);
  }

  setModelNavigate(status) {
    if (this.showList) {
      return;
    }

    this.modelNavigate = status;
    this.modelNavigateChange.emit(this.modelNavigate);
  }

  private checkFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') === -1;
  }

}
