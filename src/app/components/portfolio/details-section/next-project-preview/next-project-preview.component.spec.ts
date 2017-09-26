import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NextProjectPreviewComponent} from './next-project-preview.component';
import {Component, Input} from '@angular/core';
import {Portfolio} from '../../../../aplication/portfolio/interfaces/portfolio.interface';
import {TranslateModule} from '@ngx-translate/core';
import {MockPortfolio} from '../../../../shared/mocks/portfolio.mock';

@Component({
  selector: 'app-project-preview',
  template: 'test'
})
class ProjectPreviewMockComponent {
  @Input() index: number;
  @Input() open: number;
  @Input() project: Portfolio;
  @Input() direction: string;
}


describe('NextProjectPreviewComponent', () => {
  let component: NextProjectPreviewComponent;
  let fixture: ComponentFixture<NextProjectPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextProjectPreviewComponent, ProjectPreviewMockComponent],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextProjectPreviewComponent);
    component = fixture.componentInstance;
    component.portfolio = MockPortfolio;
    component.currentElement = 'mid-ocean-brands';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
