import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeModelComponent } from './office-model.component';

describe('OfficeModelComponent', () => {
  let component: OfficeModelComponent;
  let fixture: ComponentFixture<OfficeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
