import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondImplementationComponent } from './second-implementation.component';

describe('SecondImplementationComponent', () => {
  let component: SecondImplementationComponent;
  let fixture: ComponentFixture<SecondImplementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondImplementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
