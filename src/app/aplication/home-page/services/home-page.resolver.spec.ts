import {Router, Routes} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {TestBed, inject, tick, fakeAsync} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {Component} from '@angular/core';
import {ContactResolver} from '../../contact/services/contact.resolver';
import {HomePageResolver} from './home-page.resolver';
import {ContactService} from '../../contact/services/contact.service';
import {PortfolioService} from '../../portfolio/services/portfolio.service';
import {MockCompany} from '../../../shared/mocks/company.mock';
import {MockCarousel} from '../../../shared/mocks/carousel.mock';

@Component ({
    selector: 'app-fake-resolver',
    template: '<p></p>',
})
class FakeResolveComponent {}


export const routes: Routes = [
    {path: 'resolver', component: FakeResolveComponent, resolve: {company: ContactResolver, carousel: HomePageResolver}},
];

describe('ContactResolverService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FakeResolveComponent],
            providers: [ContactResolver, HomePageResolver, PortfolioService, ContactService],
            imports: [RouterTestingModule.withRoutes(routes), HttpModule]
        });
    });

    it('it should called resolver service on routing change to "/resolver"',
        fakeAsync(inject([ContactResolver, HomePageResolver, Router, ContactService, PortfolioService],
          (contactResolve, homeResolver, router, ContactService, PortfolioService) => {
            spyOn(contactResolve, 'resolve').and.callThrough();
            spyOn(homeResolver, 'resolve').and.callThrough();

            ContactService.getCompany = () => {
                return MockCompany
            };

            PortfolioService.getPortfolioHomePageList = () => {
                return MockCarousel
            };

            router.navigate(['/resolver']);
            tick();
            expect(contactResolve['resolve']).toHaveBeenCalled();
            expect(homeResolver['resolve']).toHaveBeenCalled();
        }))
    );

});
