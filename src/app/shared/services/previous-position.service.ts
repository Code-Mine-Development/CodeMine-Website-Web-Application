import { Injectable } from '@angular/core';
import {Router, NavigationStart} from '@angular/router';

@Injectable()
export class PreviousPositionService {

  private backTo:string = "home";
  private backCategory:string = "";

  constructor() {
  }


  setBackTo(target){
    this.backTo = target;
  }

  setBackCategory(target){
    this.backCategory= target;
  }

  getBackTo(){
    return this.backTo;
  }

  getBackCategory(){
    return this.backCategory;
  }

}
