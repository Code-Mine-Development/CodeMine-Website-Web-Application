import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditDetailsComponent } from './audit-details.component';
import {Component} from '@angular/core';
import {MockAudit} from '../../../shared/mocks/audit.mock';
import {ListComponent} from '../../shared/ui-elements/list/list.component';

@Component({
    selector: 'app-fake-audit-wrapper',
    template: `<app-audit-details [audit]="audit"></app-audit-details>`
})

class FakeWrapperAuditDetailsComponent {
    audit = MockAudit;
}

const MockWindowEvent = {
  target: {
    innerWidth: 1500,
  }
};

describe('AuditDetailsComponent', () => {
  let component: AuditDetailsComponent;
  let fixture: ComponentFixture<FakeWrapperAuditDetailsComponent>;

  let fakeComponent: AuditDetailsComponent;
  let fakeFixture: ComponentFixture<AuditDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeWrapperAuditDetailsComponent, AuditDetailsComponent, ListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeWrapperAuditDetailsComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fakeFixture = TestBed.createComponent(AuditDetailsComponent);
    fakeComponent = fakeFixture.componentInstance;
    fakeComponent.audit = component.audit;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should @Input audit contain Mock from FakeWrapperAuditDetailsComponent', () => {
    expect(component.audit).toEqual(MockAudit)
  });

  it('should define width to 1500 px', () => {
    component.registerWindowChange(MockWindowEvent);
    expect(component.width).toBe(1500)
  });

});
