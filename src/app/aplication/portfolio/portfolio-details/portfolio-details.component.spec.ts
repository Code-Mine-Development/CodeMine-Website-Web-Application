import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {LocalizeRouterService} from 'localize-router';
import {Observable} from 'rxjs/Observable';

import {PortfolioDetailsComponent} from './portfolio-details.component';
import {PortfolioComponentModule} from '../../../components/portfolio/portfolio-components.module';
import {PortfolioService} from '../services/portfolio.service';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';

import {MockTools} from '../../../shared/mocks/tools.mock';
import {MockTechnologies} from '../../../shared/mocks/technologies.mock';
import {MockPortfolio} from '../../../shared/mocks/portfolio.mock';
import {TranslateModule} from '@ngx-translate/core';


class MockPortfolioService {
  private portfolio = MockPortfolio;

  getPortfolioDetails(index: string) {
    return this.portfolio.find((portfolio_element) => (portfolio_element.link === index));
  }
}

describe('PortfolioDetailsComponent', () => {
  let component: PortfolioDetailsComponent;
  let fixture: ComponentFixture<PortfolioDetailsComponent>;
  const router = {
    navigateByUrl: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [PortfolioDetailsComponent],
        imports: [
          PortfolioComponentModule,
          NoopAnimationsModule,
          TranslateModule.forRoot()
        ],
        providers: [
          {provide: PortfolioService, useClass: MockPortfolioService},
          {provide: Router, useValue: router},
          {
            provide: ActivatedRoute, useValue: {
            params: Observable.of({id: 'mid-ocean-brands'}),
            data: Observable.of({
              tools: MockTools,
              technologies: MockTechnologies
            })
          }
          },
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
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use details from portfolio service', () => {
    expect(component.details.title).toBe('PORTFOLIO.MidOceanBrands.title');
  });

  it('should set tools and technologies', async(() => {
    expect(component.tools).toBe(MockTools);
    expect(component.technologies).toBe(MockTechnologies);
  }));

  it('should navigate to portfolio', () => {
    component.checkDetails(null,'Not found');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/portfolio')
  });

  it('should navigate to portfolio', () => {
    component.checkDetails(null,'Not found');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/portfolio')
  });

  it('should navigate', () => {
    component.navigate('tools');
    expect(router.navigateByUrl).toHaveBeenCalledWith('tools')
  })

});
