import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {OfferElementsService} from '../../technologies/services/technologies.service';
import {OfferElement} from '../../technologies/interface/technology.interface';


@Injectable()
export class TechnologiesResolver implements Resolve<OfferElement> {

  constructor(private offerElementsService: OfferElementsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<OfferElement> | Promise<OfferElement> | OfferElement {
    return this.offerElementsService.getJson("technologies");
  }

}
