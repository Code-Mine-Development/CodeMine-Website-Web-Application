import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {OfferElementsService} from '../../offerElementsDetails/services/offerElements.service';
import {OfferElement} from '../../offerElementsDetails/interface/offerElement.interface';


@Injectable()
export class TechnologiesResolver implements Resolve<OfferElement> {

  constructor(private offerElementsService: OfferElementsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<OfferElement> | Promise<OfferElement> | OfferElement {
    return this.offerElementsService.getJson('technologies');
  }

}
