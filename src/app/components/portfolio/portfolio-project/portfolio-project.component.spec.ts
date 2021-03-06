import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PortfolioProjectComponent} from './portfolio-project.component';
import {ActivatedRoute} from '@angular/router';
import {MockPortfolio} from '../../../shared/mocks/portfolio.mock';
import {TranslateModule} from '@ngx-translate/core';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';

@Component({
  selector: 'app-architecture',
  template: 'test'
})
class ArchitectureMockComponent {
  @Input() tools;
  @Input() technologies;
  @Input() currentTools;
  @Input() currentTechnologies;
  @Input() small;

  @Output() navigate = new EventEmitter();
}

describe('PortfolioProjectComponent', () => {
  let component: PortfolioProjectComponent;
  let fixture: ComponentFixture<PortfolioProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [PortfolioProjectComponent, ArchitectureMockComponent],
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

  it('should @Input portfolio to be equal MockPortfolio', () => {
    expect(component.project).toEqual(MockPortfolio[0])
  });


});
