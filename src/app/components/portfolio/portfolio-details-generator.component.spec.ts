import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsGeneratorComponent } from './portfolio-details-generator.component';
import {MockPortfolio} from '../../shared/mocks/portfolio.mock';
import {MockTechnologies} from '../../shared/mocks/technologies.mock';
import {MockTools} from '../../shared/mocks/tools.mock';
import {PortfolioComponentModule} from './portfolio-components.module';
import {TranslateModule} from '@ngx-translate/core';

describe('PortfolioDetailsGeneratorComponent', () => {
  let component: PortfolioDetailsGeneratorComponent;
  let fixture: ComponentFixture<PortfolioDetailsGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PortfolioComponentModule,
        TranslateModule.forRoot()
      ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailsGeneratorComponent);
    component = fixture.componentInstance;
    component.details = MockPortfolio[0];
    component.technologies = MockTechnologies;
    component.tools = MockTools;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
