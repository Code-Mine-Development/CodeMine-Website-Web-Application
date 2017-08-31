import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';

import { PortfolioProjectComponent } from './portfolio-project.component';
import {Router, ActivatedRoute} from '@angular/router';
import {MockPortfolio} from '../../../shared/mocks/portfolio.mock';
import {SquareImageComponent} from '../../../shared/ui-elements/squareImage/square-image.component';
import {TranslateModule} from '@ngx-translate/core';

describe('PortfolioProjectComponent', () => {
  let component: PortfolioProjectComponent;
  let fixture: ComponentFixture<PortfolioProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [PortfolioProjectComponent, SquareImageComponent],
      providers: [
        {provide: ActivatedRoute, useValue: {data: {}}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProjectComponent);
    component = fixture.componentInstance;
    component.project = MockPortfolio[0];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should @Input portfolio to be equal MockPOrtfolio', () => {
    expect(component.project).toEqual(MockPortfolio[0])
  });


});
