import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ContactComponent} from './contact.component';
import {ContactInfoComponent} from '../../components/contact/contact-info/contact-info.component';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {MockCompany} from "../../shared/mocks/company.mock";

describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    const router = {
        navigate: jasmine.createSpy('navigate')
    };


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContactComponent, ContactInfoComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        data: {
                            subscribe: (fn: (value: Data) => void) => fn({
                                company: MockCompany,
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
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should define our company variable', () => {
        expect(component.company).toBeDefined();
    });


});
