import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditItemsComponent } from './audit-items.component';

describe('AuditItemsComponent', () => {
  let component: AuditItemsComponent;
  let fixture: ComponentFixture<AuditItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
