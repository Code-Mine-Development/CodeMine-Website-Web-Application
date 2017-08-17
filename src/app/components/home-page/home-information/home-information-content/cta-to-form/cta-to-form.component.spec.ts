import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaToFormComponent } from './cta-to-form.component';

describe('CtaToFormComponent', () => {
  let component: CtaToFormComponent;
  let fixture: ComponentFixture<CtaToFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaToFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaToFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
