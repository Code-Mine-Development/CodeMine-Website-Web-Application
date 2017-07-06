import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Offer} from '../../../shared/interface/offer.interface';
import 'rxjs/Rx';


const url = 'assets/data/';

@Injectable()
export class OfferService {

  constructor(private http: Http) {}

  getOffer() {
    return this.http.get(url + 'offer.json')
      .map (
        (response: Response) => {
          const offer: Offer = response.json();
          return offer;
        }
      )
  }
}
