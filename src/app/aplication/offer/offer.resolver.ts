import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {OfferService} from './offer.service';
import {Offer} from '../../shared/interface/offer.interface';



@Injectable()
export class OfferResolver implements Resolve<Offer> {

  constructor(private offerService: OfferService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Offer> | Promise<Offer> | Offer {
    return this.offerService.getOffer();
  }

}
