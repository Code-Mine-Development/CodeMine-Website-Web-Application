import {Router, Routes, ActivatedRoute, } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {TestBed, inject, tick, fakeAsync} from '@angular/core/testing';

import {HttpModule} from '@angular/http';
import {Component} from '@angular/core';
import {AuditResolver} from './audit.resolver';
import {MockAudit} from '../../../shared/mocks/audit.mock';
import {AuditService} from './audit.service';

@Component({
  selector: 'app-fake-audit-resolver',
  template: '<p></p>',
})
class FakeResolveComponent {
}


export const routes: Routes = [
  {path: 'resolver', component: FakeResolveComponent, resolve: {audit: AuditResolver}},
];


describe('AuditResolverService', () => {
  let fixture,
      component;
  const AuditServiceMock = {
    getAudit: () => MockAudit
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeResolveComponent],
      providers: [
        AuditResolver,
        {provide: AuditService, useValue: AuditServiceMock}
      ],
      imports: [RouterTestingModule.withRoutes(routes), HttpModule]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeResolveComponent);
    component = fixture.componentInstance;
  });

  it('it should called resolver service on routing change to "/resolver"',
    fakeAsync(inject([AuditResolver, Router, AuditService], (resolve, router, auditService) => {
      spyOn(resolve, 'resolve').and.callThrough();
      router.navigate(['/resolver']);
      tick();
      expect(resolve['resolve']).toHaveBeenCalled();
    }))
  );

});
