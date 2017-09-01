import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditHeadComponent } from './audit-head.component';

describe('AuditHeadComponent', () => {
  let component: AuditHeadComponent;
  let fixture: ComponentFixture<AuditHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
