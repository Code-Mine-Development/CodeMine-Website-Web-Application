import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferComponent } from './offer.component';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {MockOffer} from '../../shared/mocks/offer.mock';
import {WeCreateComponent} from './weCreate/weCreate.component';
import {TechnologiesComponent} from './technologies/technologies.component';
import {ArchitectureComponent} from './architecture/architecture.component';

describe('OfferComponent', () => {
  let component: OfferComponent;
  let fixture: ComponentFixture<OfferComponent>;
  let nativeElement;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferComponent, WeCreateComponent, TechnologiesComponent, ArchitectureComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                offer: MockOffer,
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
    fixture = TestBed.createComponent(OfferComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
