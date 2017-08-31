import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {LocalizeRouterService} from 'localize-router';

import { PortfolioComponent } from './portfolio.component';
import {PreviousPositionService} from '../../shared/services/previous-position.service';



describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioComponent ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
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
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
