import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HomeInformation} from '../interfaces/home-information.interface';
import {Subject, Observable} from 'rxjs/Rx';

const url = 'assets/data/';

@Injectable()
export class HomeInformationServices {

  private scrollTopStream = new Subject();
  private homeInformations: HomeInformation;

  constructor(private http: Http) {

  }

  getInformation() {
    if (this.homeInformations)
      return Observable.from([this.homeInformations]);

    return this.http.get(url + 'home-information.json')
      .map(
        (response: Response) => {
          this.homeInformations = <HomeInformation>response.json()
          return this.homeInformations;
        })
  }

  setScrollTop(scrollTop){
    this.scrollTopStream.next(scrollTop);
  }

  getScrollTopStream(){
    return this.scrollTopStream.asObservable();
  }

}
