// import {Router, Routes, } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import {TestBed, inject, tick, fakeAsync} from '@angular/core/testing';
//
// import {HttpModule} from '@angular/http';
// import {Component} from '@angular/core';
// import {OfferResolver} from './offer.resolver';
// import {OfferService} from './offer.service';
// import {MockOffer} from '../../../shared/mocks/offer.mock';
//
//
//
// @Component ({
//   selector: 'app-fake-offer-resolver',
//   template: '<p></p>',
// })
// class FakeResolveComponent {}
//
//
// export const routes: Routes = [
//   {path: 'resolver', component: FakeResolveComponent, resolve: {offerService: OfferService}},
// ];
//
// describe('OfferResolverService', () => {
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [FakeResolveComponent],
//       providers: [OfferResolver, OfferService],
//       imports: [RouterTestingModule.withRoutes(routes), HttpModule]
//     })
//   });
//
//   it('it should called resolver service on routing change to "/resolver"',
//     fakeAsync(inject([OfferResolver, Router, OfferService], (resolve, router, offerService) => {
//       spyOn(resolve, 'resolve').and.callThrough();
//
//       offerService.getOffer = () => {
//         return MockOffer
//       };
//       router.navigate(['/resolver']);
//       tick();
//       expect(resolve['resolve']).toHaveBeenCalled();
//     }))
//   );
//
// });
