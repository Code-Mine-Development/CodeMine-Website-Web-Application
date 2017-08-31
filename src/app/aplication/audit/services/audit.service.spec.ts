import {async, TestBed, inject} from '@angular/core/testing';
import {HttpModule, XHRBackend, ResponseOptions, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {AuditService} from './audit.service';
import {MockAudit} from '../../../shared/mocks/audit.mock';

describe('AuditService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        AuditService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    })
  }));

  describe('getCompany()', () => {
    it('should return collection of company list',
      inject([AuditService, XHRBackend], (auditService: AuditService, mockBackend) => {
        expect(AuditService).toBeDefined();
        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(MockAudit)
          })));
        });

        auditService.getAudit().subscribe((audit) => {
          expect(audit[0].title).toContain('Quality');
        });
      }));

    it('should return previous downloaded collection of company list',
      inject([AuditService, XHRBackend], (auditService: AuditService, mockBackend) => {
        let calls = 0;
        mockBackend.connections.subscribe((connection) => {
          calls++;
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(MockAudit)
          })));
        });
        auditService.getAudit().subscribe().unsubscribe();

        auditService.getAudit().subscribe((audit) => {
          expect(calls).toBe(1);
          expect(audit[0].title).toContain('Quality');
        }).unsubscribe();
      }));
  });
});
