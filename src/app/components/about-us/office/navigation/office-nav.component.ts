import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-office-nav',
  template: `
    <nav>
      <ul>
            <li>
              <img [hidden]="showListStatus" (click)="setShowListStatus(true)" src="assets/images/office-nav/lista.svg" alt="navigate to list">
              <img [hidden]="!showListStatus" (click)="setShowListStatus(false)" src="assets/images/office-nav/mapa.svg" alt="navigate to map">
             </li>
            <li *ngIf="checkFirefox()">
              <img [class.disabled]="showListStatus" [hidden]="modelStatus != 'maximize'" (click)="setModelNavigate('minimize')" src="assets/images/office-nav/pomniejsz.svg" alt="navigate to big map">
              <img [class.disabled]="showListStatus" [hidden]="modelStatus != 'minimize'" (click)="setModelNavigate('maximize')" src="assets/images/office-nav/powieksz.svg" alt="navigate to small map">
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
