import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {TechnologiesService} from './tools.service';
import {Tool} from '../interface/tool.interface';


@Injectable()
export class TechnologiesResolver implements Resolve<Tool[]> {

    constructor(private technologiesService: TechnologiesService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Tool[]> | Promise<Tool[]> | Tool[] {
        return this.technologiesService.getTechnologies();
    }

}
