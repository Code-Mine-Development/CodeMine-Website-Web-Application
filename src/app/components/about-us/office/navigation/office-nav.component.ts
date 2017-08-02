import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-office-nav',
  template: `
    <nav>
      <ul>
            <li>
              <app-list-icon [state]="showListStatus" (stateChange)="setShowListStatus($event)"></app-list-icon>
             </li>
            <li *ngIf="checkFirefox()">
              <app-model-navigate-icon [class.disabled]="showListStatus" [state]="modelStatus" (stateChange)="setModelNavigate($event)"></app-model-navigate-icon>
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
export class OfficeNavComponent{

  @Output("showListChange") changeShowListStatus = new EventEmitter();
  @Output("modelNavigateChange") changeModelStatus = new EventEmitter();

  @Input("showList") showListStatus:boolean;
  @Input("modelNavigate") modelStatus:string;

  constructor() { }

  setShowListStatus(status){
    this.showListStatus = status;
    this.changeShowListStatus.emit(this.showListStatus);
  }
  setModelNavigate(status){
    if(this.showListStatus)
      return;
    this.modelStatus = status;
    this.changeModelStatus.emit(this.modelStatus);
  }

  checkFirefox(){
    if(navigator.userAgent.toLowerCase().indexOf('firefox') !== -1)
      return false;
    return true;
  }

}
