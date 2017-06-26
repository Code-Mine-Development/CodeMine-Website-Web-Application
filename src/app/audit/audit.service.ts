import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Audit} from './audit.interface';
import 'rxjs/Rx';

const url = 'assets/data/';

@Injectable()
export class AuditService {

    constructor(private http: Http) {

    }

    getAudit() {
        return this.http.get(url + 'audyt.json')
            .map(
                (response: Response) => {
                    const audits: Audit = response.json();
                    return audits;
                })
    }

}
