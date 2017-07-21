import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {TechnologiesService} from './technologies.service';
import {Technology} from '../interface/technology.interface';


@Injectable()
export class TechnologiesResolver implements Resolve<Technology[]> {

    constructor(private technologiesService: TechnologiesService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Technology[]> | Promise<Technology[]> | Technology[] {
        return this.technologiesService.getTechnologies();
    }

}
