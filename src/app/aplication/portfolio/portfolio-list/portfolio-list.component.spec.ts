import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioListComponent } from './portfolio-list.component';
import {ActivatedRoute, Data, Router} from "@angular/router";
import {MockPortfolio} from "app/shared/mocks/portfolio.mock";
import {PortfolioProjectComponent} from "../../../components/portfolio/portfolio-project/portfolio-project.component";
import {UiModule} from "../../../shared/ui-elements/ui.module";

describe('PortfolioListComponent', () => {
  let component: PortfolioListComponent;
  let fixture: ComponentFixture<PortfolioListComponent>;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioListComponent, PortfolioProjectComponent ],
      imports:[UiModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                portfolio: MockPortfolio,
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

});
