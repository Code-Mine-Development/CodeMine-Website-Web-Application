import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomePageComponent} from './home-page.component';
import {HomeInformationComponent} from '../../components/home-page/home-information/home-information.component';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {ContactComponentModule} from "../../components/contact/contact-components.module";

const MockCompany = {
    'country': 'Poland',
    'city': 'Katowice',
    'street': '3 maja',
    'apartment': '18/3',
    'email': 'office@code-mine.com',
    'phone': '+48 723 21 67'
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

describe('HomePageComponent', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;
    const router = {
        navigate: jasmine.createSpy('navigate')
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePageComponent, HomeInformationComponent],
            imports: [CommonModule, RouterTestingModule, UiModule,ContactComponentModule],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        data: {
                            subscribe: (fn: (value: Data) => void) => fn({
                                company: MockCompany,
                                carousel: MockCarousel
                            })
                        }
                    }
                },
                {provide: Router, useValue: router}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should define our company variable', () => {
        expect(component.company).toBeDefined();
    });

    it('should define our portfolio variable', () => {
        expect(component.carousel).toBeDefined();
    });

});
