import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationComponent } from './specification.component';

describe('SpecificationComponent', () => {
  let component: SpecificationComponent;
  let fixture: ComponentFixture<SpecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
