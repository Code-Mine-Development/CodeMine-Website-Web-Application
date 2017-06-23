import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {ContactService} from "./contact.service";
import {Company} from "../shared/interface/company.interface";


@Injectable()
export class ContactResolver implements Resolve<Company> {

    constructor(private contactService: ContactService){}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Company> | Promise<Company> | Company {
        return this.contactService.getCompany();
    }

}