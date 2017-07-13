import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cApplicationsComponent } from './b2c-applications.component';

describe('B2cApplicationsComponent', () => {
  let component: B2cApplicationsComponent;
  let fixture: ComponentFixture<B2cApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2cApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
