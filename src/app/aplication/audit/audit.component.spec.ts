import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditComponent } from './audit.component';
import {AuditDetailsComponent} from '../../components/audit/audit-details/audit-details.component';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {MockAudit} from '../../shared/mocks/audit.mock';
import {AuditListComponent} from "../../components/audit/audit-list/aduit-list.component";


describe('AuditComponent', () => {
  let component: AuditComponent;
  let fixture: ComponentFixture<AuditComponent>;
  let nativeElement;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditComponent, AuditDetailsComponent, AuditListComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                audit: MockAudit,
              })
            }
          }
        },
        {provide: Router, useValue: router}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return the same length of DOM element to MockAudit', () => {
    const link = nativeElement.querySelectorAll('app-audit-details');
    expect(link.length).toBe(MockAudit.length);
  });

});
