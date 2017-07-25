import { Injectable } from '@angular/core';
import {Router, NavigationStart} from '@angular/router';

@Injectable()
export class PreviousPositionService {

  private backTo:string = "home";
  private backFrom:string = "";

  constructor() {
  }


  setBackTo(target){
    this.backTo = target;
  }

  setBackFrom(target){
    this.backFrom = target;
  }

  getBackTo(){
    return this.backTo;
  }

  getBackFrom(){
    return this.backFrom;
  }

}
