import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {PortfolioListComponent} from './portfolio-list.component';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {MockPortfolio} from 'app/shared/mocks/portfolio.mock';
import {PortfolioProjectComponent} from '../../../components/portfolio/portfolio-project/portfolio-project.component';
import {UiModule} from '../../../shared/ui-elements/ui.module';
import {LocalizeRouterService} from 'localize-router';
import {TranslateModule} from '@ngx-translate/core';

const MockRoutingData = {
  data: {
    subscribe: (fn: (value: Data) => void) => fn({
      portfolio: MockPortfolio,
    })
  }
};

describe('PortfolioListComponent', () => {
  let component: PortfolioListComponent;
  let fixture: ComponentFixture<PortfolioListComponent>;

  const router = {
    navigateByUrl: jasmine.createSpy('navigateByUrl')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioListComponent, PortfolioProjectComponent],
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
