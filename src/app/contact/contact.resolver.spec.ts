import {Router, Routes} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {TestBed, inject, tick, fakeAsync} from '@angular/core/testing';
import {ContactResolver} from "./contact.resolver";
import {ContactService} from "./contact.service";
import {HttpModule} from "@angular/http";
import {Component} from "@angular/core";

const MockCompany = {
    "country":"Poland",
    "city": "Katowice",
    "street":"3 maja",
    "apartment": "18/3",
    "email":"office@code-mine.com",
    "phone":"+48 723 21 67"
};

@Component ({
    selector: 'fake-app-resolver',
    template: '<p></p>',
})
class FakeResolveComponent {}


export const routes: Routes = [
    {path: 'resolver', component: FakeResolveComponent, resolve: {company: ContactResolver}},
];

describe('ContactResolverService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[FakeResolveComponent],
            providers: [ContactResolver,ContactService],
            imports: [RouterTestingModule.withRoutes(routes),HttpModule]
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