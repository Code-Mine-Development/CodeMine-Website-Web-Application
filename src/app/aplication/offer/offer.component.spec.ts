import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';

import {OfferComponent} from './offer.component';
import {WeCreateComponent} from './weCreate/weCreate.component';
import {TechnologiesComponent} from './technologies/technologies.component';
import {ToolsComponent} from './tools/tools.component';

import {MockOffer} from '../../shared/mocks/offer.mock';
import {OfferThumbnailsComponent} from '../../shared/ui-elements/offer-thumbnails/offer-thumbnails.component';
import {PreviousPositionService} from '../../shared/services/previous-position.service';
import {ScrollToService} from '../../shared/services/scroll-to.service';
import {MockTools} from '../../shared/mocks/tools.mock';
import {MockTechnologies} from '../../shared/mocks/technologies.mock';



describe('OfferComponent', () => {
  let component: OfferComponent;
  let fixture: ComponentFixture<OfferComponent>;
  let nativeElement;
  const router = {
      navigate: jasmine.createSpy('navigate')
    },
    scrollTo = {
      scroll: jasmine.createSpy('scroll')
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        NoopAnimationsModule
      ],
      declarations: [OfferComponent, WeCreateComponent, TechnologiesComponent, ToolsComponent, OfferThumbnailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                offer: MockOffer,
                tools: MockTools,
                technologies: MockTechnologies
              })
            }
          }
        },
        {provide: Router, useValue: router},
        {provide: ScrollToService, useValue: scrollTo},
        {
          provide: LocalizeRouterService,
          useValue: {
            translateRoute: (val) => val
          }
        },
        PreviousPositionService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const service: PreviousPositionService = TestBed.get(PreviousPositionService);
    service.setBackCategory('tools');
    fixture = TestBed.createComponent(OfferComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to section', () => {
    expect(scrollTo.scroll).toHaveBeenCalled();
    expect(scrollTo.scroll).toHaveBeenCalledWith('offer_tools');
  })

  it('should parse category', () => {
    spyOn(fixture.componentInstance, 'goToSection').and.callThrough();
    fixture.componentInstance.parseCategory('tools');
    expect(fixture.componentInstance.goToSection).toHaveBeenCalled();
    expect(fixture.componentInstance.goToSection).toHaveBeenCalledWith('offer_tools');
  })
});
