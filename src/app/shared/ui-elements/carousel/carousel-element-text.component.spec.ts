import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselElementTextComponent } from './carousel-element-text.component';

describe('CarouselElementTextComponent', () => {
  let component: CarouselElementTextComponent;
  let fixture: ComponentFixture<CarouselElementTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselElementTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselElementTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
