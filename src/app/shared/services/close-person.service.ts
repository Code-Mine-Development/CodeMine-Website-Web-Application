import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class ClosePersonService {
  private onClose = new Subject();

  registerCloseFunction(){
   return this.onClose.asObservable();
  }

  triggerClose(){

      this.onClose.next('any');
  }
  constructor() { }

}
