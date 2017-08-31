import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditDetailsComponent } from './audit-details.component';
import {Component} from '@angular/core';
import {MockAudit} from '../../../shared/mocks/audit.mock';
import {AuditListComponent} from '../audit-list/aduit-list.component'
import {TranslateModule} from '@ngx-translate/core';
import {AuditListElementComponent} from '../audit-list/audit-list-element.component';
import {DrawBackgroundService} from '../../../shared/services/draw-background.service';

@Component({
    selector: 'app-fake-audit-wrapper',
    template: `<app-audit-details [audit]="audit"></app-audit-details>`
})

class FakeWrapperAuditDetailsComponent {
    audit = MockAudit;
}

describe('AuditDetailsComponent', () => {
  let component: AuditDetailsComponent;
  let fixture: ComponentFixture<FakeWrapperAuditDetailsComponent>;

  let fakeComponent: AuditDetailsComponent;
  let fakeFixture: ComponentFixture<AuditDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [ FakeWrapperAuditDetailsComponent, AuditDetailsComponent, AuditListComponent, AuditListElementComponent ],
      providers: [ DrawBackgroundService ]
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

});
