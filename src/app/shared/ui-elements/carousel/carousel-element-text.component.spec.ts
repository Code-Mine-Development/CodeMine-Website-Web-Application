import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselElementTextComponent } from './carousel-element-text.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule} from '@ngx-translate/core';

describe('CarouselElementTextComponent', () => {
  let component: CarouselElementTextComponent;
  let fixture: ComponentFixture<CarouselElementTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        NoopAnimationsModule,
        TranslateModule.forRoot()
      ],
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
