import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsabilityComponent } from './usability.component';

describe('UsabilityComponent', () => {
  let component: UsabilityComponent;
  let fixture: ComponentFixture<UsabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
