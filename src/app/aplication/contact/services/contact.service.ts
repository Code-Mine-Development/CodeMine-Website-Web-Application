import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Company} from '../../../shared/interface/company.interface';
import 'rxjs/Rx';

const url = 'assets/data/';

@Injectable()
export class ContactService {

    constructor(private http: Http) {

    }

    getCompany() {
        return this.http.get(url + 'company.json')
            .map(
            (response: Response) => {
                const company: Company = response.json();
                return company;
            })
    }

}
