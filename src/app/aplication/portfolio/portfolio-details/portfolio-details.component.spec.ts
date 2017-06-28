import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsComponent } from './portfolio-details.component';
import {PortfolioComponentModule} from "../../../components/portfolio/portfolio-components.module";

describe('PortfolioDetailsComponent', () => {
  let component: PortfolioDetailsComponent;
  let fixture: ComponentFixture<PortfolioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDetailsComponent ],
      imports:[PortfolioComponentModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
