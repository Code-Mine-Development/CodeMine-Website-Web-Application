import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, Input} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {Portfolio} from '../../../aplication/portfolio/interfaces/portfolio.interface';
import {MockPortfolio} from '../../mocks/portfolio.mock';
import {CarouselComponent} from './carousel.component';
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


describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent, ProjectPreviewMockComponent],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.portfolio = MockPortfolio;
    component.currentElement = 'mid-ocean-brands';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
