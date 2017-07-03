import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HomeInformation} from '../interfaces/home-information.interface';
import {HomeInformationServices} from './home-information.service';


@Injectable()
export class HomeInformationResolver implements Resolve<HomeInformation> {

  constructor(private homeInformationServices: HomeInformationServices) {

  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<HomeInformation> | Promise<HomeInformation> | HomeInformation {
    return  this.homeInformationServices.getInformation();
  }
}
