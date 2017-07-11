import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';

import { PortfolioProjectComponent } from './portfolio-project.component';
import {Router, ActivatedRoute} from '@angular/router';
import {Component} from '@angular/core';
import {MockPortfolio} from '../../../shared/mocks/portfolio.mock';
import {SquareImageComponent} from '../../../shared/ui-elements/squareImage/square-image.component';
import {AppRoutingProvider} from '../../../app-routing-provider';

@Component({
  selector: 'app-fake-project-wrapper',
  template: `<app-portfolio-project [project]="project" (onAction)="showDetails(1)"></app-portfolio-project>`
})
class FakeWrapperPortfolioProjectComponent {
  index = 1;
  project = MockPortfolio[0];

  constructor(private route: ActivatedRoute, private router: Router) {}
  showDetails(index: number): void {
    this.router.navigate(AppRoutingProvider.portfolioDetail(index), {relativeTo: this.route})
  }
}

describe('PortfolioProjectComponent', () => {
  let component: PortfolioProjectComponent;
  let fixture: ComponentFixture<FakeWrapperPortfolioProjectComponent>;

  let fakeComponent: PortfolioProjectComponent;
  let fakeFixture: ComponentFixture<PortfolioProjectComponent>;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FakeWrapperPortfolioProjectComponent, PortfolioProjectComponent, SquareImageComponent],
      providers: [
        {provide: Router, useValue: router},
        {provide: ActivatedRoute, useValue: {data: {}}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeWrapperPortfolioProjectComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fakeFixture = TestBed.createComponent(PortfolioProjectComponent);
    fakeComponent = fakeFixture.componentInstance;
    fakeComponent.project = component.project;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should @Input portfolio to be equal MockPOrtfolio', () => {
    expect(component.project).toEqual(MockPortfolio[0])
  });

  it('should change routing', fakeAsync(() => {
    component.onClick();
    tick();
    expect(router.navigate).toHaveBeenCalledWith(['/portfolio/', 1], {relativeTo: {data: {}}});

  }));


});
