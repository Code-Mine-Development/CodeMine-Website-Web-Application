import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HomeInformation} from '../interfaces/home-information.interface';
import 'rxjs/Rx';

const url = 'assets/data/';

@Injectable()
export class HomeInformationServices {

  constructor(private http: Http) {

  }

  getInformation() {
    return this.http.get(url + 'home-information.json')
      .map(
        (response: Response) => {
          const informations: HomeInformation = response.json();
          return informations;
        })
  }

}
