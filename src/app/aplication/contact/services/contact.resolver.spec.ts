import {Router, Routes} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {TestBed, inject, tick, fakeAsync} from '@angular/core/testing';
import {ContactResolver} from './contact.resolver';
import {ContactService} from './contact.service';
import {HttpModule} from '@angular/http';
import {Component} from '@angular/core';
import {MockCompany} from '../../../shared/mocks/company.mock';

@Component ({
    selector: 'app-fake-resolver',
    template: '<p></p>',
})
class FakeResolveComponent {}


export const routes: Routes = [
    {path: 'resolver', component: FakeResolveComponent, resolve: {company: ContactResolver}},
];

describe('ContactResolverService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FakeResolveComponent],
            providers: [ContactResolver, ContactService],
            imports: [RouterTestingModule.withRoutes(routes), HttpModule]
        });
    });

    it('it should called resolver service on routing change to "/resolver"',
        fakeAsync(inject([ContactResolver, Router, ContactService], (resolve, router, ContactService) => {
            spyOn(resolve, 'resolve').and.callThrough();

            ContactService.getCompany = () => {
                return MockCompany
            };
            router.navigate(['/resolver']);
            tick();
            expect(resolve['resolve']).toHaveBeenCalled();
        }))
    );

});
