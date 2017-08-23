import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsGeneratorComponent } from './portfolio-details-generator.component';

describe('PortfolioDetailsGeneratorComponent', () => {
  let component: PortfolioDetailsGeneratorComponent;
  let fixture: ComponentFixture<PortfolioDetailsGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDetailsGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
