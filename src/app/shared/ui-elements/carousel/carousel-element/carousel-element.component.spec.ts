import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CarouselElementComponent} from './carousel-element.component';
import {TranslateModule} from '@ngx-translate/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CopyToClipboardService} from '../../../services/copy-to-clipboard.service';
import {MockPortfolio} from '../../../mocks/portfolio.mock';

describe('CarouselElementComponent', () => {
  let component: CarouselElementComponent;
  let fixture: ComponentFixture<CarouselElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselElementComponent ],
      imports: [
        TranslateModule.forRoot(),
        NoopAnimationsModule
      ],
      providers: [
        {provide: CopyToClipboardService, useValue: {
          copy: (text) => true,
          detectMobile: () => true
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselElementComponent);
    component = fixture.componentInstance;
    component.open = 0;
    component.index = 0;
    component.project = MockPortfolio[0];
    component.direction = 'next';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
