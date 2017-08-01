import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {OfferElementsService} from './offerElements.service';
import {OfferElement} from '../interface/offerElement.interface';


@Injectable()
export class ToolsResolver implements Resolve<OfferElement> {

  constructor(private offerElementService: OfferElementsService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<OfferElement> | Promise<OfferElement> | OfferElement {
    return this.offerElementService.getData("tools",route);
  }

}
