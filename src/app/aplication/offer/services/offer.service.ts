import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Offer} from '../../../shared/interface/offer.interface';
import 'rxjs/Rx';
import {Observable} from 'rxjs';


const url = 'assets/data/';

@Injectable()
export class OfferService {

  private offer: Offer;

  constructor(private http: Http) {
  }

  getOffer(): Observable<Offer> {
    if (this.offer)
      return Observable.from([this.offer]);

    return this.http.get(url + 'offer.json')
      .map(
        (response: Response) => {
          this.offer = response.json();
          return this.offer;
        }
      )
  }
}
