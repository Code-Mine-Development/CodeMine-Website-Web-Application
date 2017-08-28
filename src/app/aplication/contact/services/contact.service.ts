import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Company} from '../../../shared/interface/company.interface';
import {Observable} from 'rxjs/Observable';

const url = 'assets/data/';

@Injectable()
export class ContactService {

  private contact: Company;

  constructor(private http: Http) {

  }

  getCompany() {
    if (this.contact) {
      return Observable.from([this.contact]);
    }

    return this.http.get(url + 'company.json')
      .map(
        (response: Response) => {
          this.contact = response.json();
          return this.contact;
        })
  }

}
