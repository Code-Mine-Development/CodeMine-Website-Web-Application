import {async, ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {Observable} from 'rxjs/Observable';

import {PortfolioDetailsModel} from './portfolio-details.model';
import {MockPortfolio} from '../../../shared/mocks/portfolio.mock';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';


@Component({
  selector: 'app-mock-component',
  template: '{{event}}',
  styles: []
})
class MockComponent extends PortfolioDetailsModel implements OnInit {
  protected id = 'mid-ocean-brands'

  constructor(route: ActivatedRoute, router: Router, localize: LocalizeRouterService, prevPosition: PreviousPositionService) {
    super(route, router, localize, prevPosition)
  }
}

describe('Portfolio model', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;
  const routeMock = {
      data: Observable.of({portfolio: MockPortfolio, tools: 'tools_test', technologies: 'technologies_test'})
    },
    routerMock = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    },
    localizeMock = {
      translateRoute: (value) => value
    },
    prevPositionMock = {
      setBackTo: jasmine.createSpy('setBackTo')
    };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
      providers: [
        {provide: ActivatedRoute, useValue: routeMock},
        {provide: Router, useValue: routerMock},
        {provide: LocalizeRouterService, useValue: localizeMock},
        {provide: PreviousPositionService, useValue: prevPositionMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should load datas', fakeAsync(() => {
    expect(component.technologies).toBe('technologies_test');
    expect(component.tools).toBe('tools_test');
    expect(component.detail.link).toBe(MockPortfolio[0].link)
  }));

  it('should call navigate', () => {
    component.parseDetails(MockPortfolio, 'sth what no exist');
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('/portfolio');
  })

  it('prev position should be set', () => {
    expect(prevPositionMock.setBackTo).toHaveBeenCalledWith('/portfolio/mid-ocean-brands')
  })

});
