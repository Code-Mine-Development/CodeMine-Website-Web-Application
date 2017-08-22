import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoImagesComponent } from './two-images.component';

describe('TwoImagesComponent', () => {
  let component: TwoImagesComponent;
  let fixture: ComponentFixture<TwoImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
