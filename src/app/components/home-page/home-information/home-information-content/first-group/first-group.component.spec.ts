import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGroupComponent } from './first-group.component';

describe('FirstGroupComponent', () => {
  let component: FirstGroupComponent;
  let fixture: ComponentFixture<FirstGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
