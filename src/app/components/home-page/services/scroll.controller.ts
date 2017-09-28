import {Injectable} from '@angular/core';
import {ScrollToService} from '../../../shared/services/scroll-to.service';


@Injectable()
export class ScrollController {

  currentElement = 1;

  constructor(private scrollToService: ScrollToService) {
  }


  setScrollTop( scrollTop:number, firstSectionSize:number ){
    console.log( scrollTop );
  }

}
