import {Router, Routes} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {TestBed, inject, tick, fakeAsync, async} from '@angular/core/testing';
import {HttpModule} from "@angular/http";
import {Component} from "@angular/core";
import {ContactResolver} from "../../contact/contact.resolver";
import {HomePageResolver} from "./home-page.resolver";
import {PortfolioService} from "../../shared/service/portfolio.service";
import {ContactService} from "../../contact/contact.service";

const MockCompany = {
    "country":"Poland",
    "city": "Katowice",
    "street":"3 maja",
    "apartment": "18/3",
    "email":"office@code-mine.com",
    "phone":"+48 723 21 67"
};

const MockCarousel = [
    {
        'title': 'Mountain1',
        'description': 'Super Description1',
        'mainImage': 'https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg',
        'thumbnail': 'https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg',
        'tags': {
            'products': ['prod1', 'prod2', 'prod3'],
            'technology': ['tech1', 'tech2', 'tech3'],
            'languages': ['lang1', 'lang1', 'lang1']
        },
        'technologies': [
            {
                'title': 'Technology1',
                'description': 'Description1',
                'thumbnail': 'https://just4fun.io/content/images/2016/05/angular.png',
                'mainImage': 'https://just4fun.io/content/images/2016/05/angular.png'
            },
            {
                'title': 'Technology2',
                'description': 'Description2',
                'thumbnail': 'https://just4fun.io/content/images/2016/05/angular.png',
                'mainImage': 'https://just4fun.io/content/images/2016/05/angular.png'
            },
            {
                'title': 'Technology3',
                'description': 'Description3',
                'thumbnail': 'https://just4fun.io/content/images/2016/05/angular.png',
                'mainImage': 'https://just4fun.io/content/images/2016/05/angular.png'
            },
            {
                'title': 'Technology4',
                'description': 'Description4',
                'thumbnail': 'https://just4fun.io/content/images/2016/05/angular.png',
                'mainImage': 'https://just4fun.io/content/images/2016/05/angular.png'
            }
        ],
        'homePage': true
    },
];

@Component ({
    selector: 'fake-app-resolver',
    template: '<p></p>',
})
class FakeResolveComponent {}


export const routes: Routes = [
    {path: 'resolver', component: FakeResolveComponent, resolve: {company: ContactResolver, carousel: HomePageResolver}},
];

describe('ContactResolverService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[FakeResolveComponent],
            providers: [ContactResolver,HomePageResolver,PortfolioService,ContactService],
            imports: [RouterTestingModule.withRoutes(routes),HttpModule]
        });
    });

    it('it should called resolver service on routing change to "/resolver"',
        fakeAsync(inject([ContactResolver,HomePageResolver, Router, ContactService, PortfolioService], (contactResolve, homeResolver, router, ContactService, PortfolioService) => {
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
