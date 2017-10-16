import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, Input} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {Portfolio} from '../../../aplication/portfolio/interfaces/portfolio.interface';
import {MockPortfolio} from '../../mocks/portfolio.mock';
import {CarouselComponent} from './carousel.component';
import {SharedModule} from '../../shared.module';
@Component({
  selector: 'app-carousel-element',
  template: 'test'
})
class CarouselElementMockComponent {
  @Input() index: number;
  @Input() open: number;
  @Input() project: Portfolio;
  @Input() direction: string;
  @Input() disabledNavigation: boolean;

}


describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent, CarouselElementMockComponent],
      imports: [
        TranslateModule.forRoot(),
        SharedModule
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
