import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HomeInformation} from '../interfaces/home-information.interface';
import {Subject} from 'rxjs/Rx';

const url = 'assets/data/';

@Injectable()
export class HomeInformationServices {

  private scrollTopStream = new Subject();

  constructor(private http: Http) {

  }

  getInformation() {
    return this.http.get(url + 'home-information.json')
      .map(
        (response: Response) => {
          return <HomeInformation>response.json();
        })
  }

  setScrollTop(scrollTop){
    this.scrollTopStream.next(scrollTop);
  }

  getScrollTopStream(){
    return this.scrollTopStream.asObservable();
  }

}
