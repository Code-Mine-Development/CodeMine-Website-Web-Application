import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Audit} from '../interfaces/audit.interface';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

const url = 'assets/data/';

@Injectable()
export class AuditService {

    private audits: Audit;

    constructor(private http: Http) {

    }

    getAudit(): Observable<Audit> {
        if (this.audits)
          return Observable.from([this.audits])

        return this.http.get(url + 'audyt.json')
            .map(
                (response: Response) => {
                    this.audits = response.json();
                    return this.audits;
                })
    }

}
