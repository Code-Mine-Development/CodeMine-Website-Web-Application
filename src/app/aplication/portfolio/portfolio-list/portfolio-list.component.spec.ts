import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {LocalizeRouterService} from 'localize-router';
import {TranslateModule} from '@ngx-translate/core';
import {Component, EventEmitter, Output, Input} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {PortfolioListComponent} from './portfolio-list.component';
import {MockPortfolio} from 'app/shared/mocks/portfolio.mock';
import {UiModule} from '../../../shared/ui-elements/ui.module';
import {OfferElementBeforePrepare} from '../../offerElementsDetails/interface/offerElementBeforePrepare';
import {Portfolio} from '../interfaces/portfolio.interface';


const MockRoutingData = {
  data: {
    subscribe: (fn: (value: Data) => void) => fn({
      portfolio: MockPortfolio,
    })
  }
};

@Component({
  selector: 'app-portfolio-project',
  template: 'test'
})
class PortfolioProjectComponentMock {

  @Input() project: Portfolio;
  @Input() tools: OfferElementBeforePrepare[];
  @Input() technologies: OfferElementBeforePrepare[];

  @Output() onAction: EventEmitter<string> = new EventEmitter();
  @Output() navigate: EventEmitter<string> = new EventEmitter();
}

describe('PortfolioListComponent', () => {
  let component: PortfolioListComponent;
  let fixture: ComponentFixture<PortfolioListComponent>;

  const router = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioListComponent, PortfolioProjectComponentMock],
      imports: [
        UiModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: MockRoutingData,
        },
        {provide: Router, useValue: router},
        {
          provide: LocalizeRouterService,
          useValue: {
            translateRoute: (val) => val
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should define our portfolio variable', () => {
    expect(component.portfolio).toBeDefined();
  });

  it('should change routing', fakeAsync(() => {
    component.showDetails('mdlinking');
    tick();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/portfolio/mdlinking');

  }));


});
