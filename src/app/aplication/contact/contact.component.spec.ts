import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {ContactComponent} from './contact.component';

import {MockCompany} from '../../shared/mocks/company.mock';
import {ContactComponentModule} from '../../components/contact/contact-components.module';
import {TranslateModule} from '@ngx-translate/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    const router = {
        navigate: jasmine.createSpy('navigate')
    };


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
              ContactComponentModule,
              TranslateModule.forRoot(),
              NoopAnimationsModule
            ],
            declarations: [ContactComponent],
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
