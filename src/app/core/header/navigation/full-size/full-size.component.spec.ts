import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSizeComponent } from './full-size.component';

describe('FullSizeComponent', () => {
  let component: FullSizeComponent;
  let fixture: ComponentFixture<FullSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
