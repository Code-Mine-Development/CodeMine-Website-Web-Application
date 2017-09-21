import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PortfolioProjectComponent} from './portfolio-project.component';
import {ActivatedRoute} from '@angular/router';
import {MockPortfolio} from '../../../shared/mocks/portfolio.mock';
import {TranslateModule} from '@ngx-translate/core';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-architecture',
  template: 'test'
})
class ArchitectureMock {
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
        TranslateModule.forRoot()
      ],
      declarations: [PortfolioProjectComponent, ArchitectureMock],
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
