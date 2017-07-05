import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomePageComponent} from './home-page.component';
import {HomeInformationComponent} from '../../components/home-page/home-information/home-information.component';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {UiModule} from '../../shared/ui-elements/ui.module';
import {ContactComponentModule} from '../../components/contact/contact-components.module';
import {MockCompany} from '../../shared/mocks/company.mock';
import {MockCarousel} from '../../shared/mocks/carousel.mock';

describe('HomePageComponent', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;
    const router = {
        navigate: jasmine.createSpy('navigate')
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePageComponent, HomeInformationComponent],
            imports: [CommonModule, RouterTestingModule, UiModule, ContactComponentModule],
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
