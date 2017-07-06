import {async, TestBed, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, ResponseOptions, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {OfferService} from './offer.service';
import {MockOffer} from '../../../shared/mocks/offer.mock';


describe('OfferServices', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        OfferService,
        { provide: XHRBackend, useClass: MockBackend}
      ]
    })
  }));

  describe('getOffer()', () => {
    it('should return collection of offer list',
      inject([OfferService, XHRBackend], (offerServices: OfferService, mockBackend) => {
        expect(OfferService).toBeDefined();
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(MockOffer)
          })));
        });

        offerServices.getOffer().subscribe((offer) => {
          console.log(offer[0].title);
          expect(offer[0].title).toBe('We create');
        });
      }));
  });
});
