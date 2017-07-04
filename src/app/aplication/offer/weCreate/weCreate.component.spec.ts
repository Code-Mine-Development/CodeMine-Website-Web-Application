import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeCreateComponent } from './weCreate.component';

describe('WeCreateComponent', () => {
  let component: WeCreateComponent;
  let fixture: ComponentFixture<WeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
