import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCreateDetailsComponent } from './weCreateDetails.component';

describe('WeCreateDetailsComponent', () => {
  let component: WeCreateDetailsComponent;
  let fixture: ComponentFixture<WeCreateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeCreateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeCreateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
