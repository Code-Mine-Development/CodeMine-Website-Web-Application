import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuditService} from './audit.service';
import {Audit} from '../interfaces/audit.interface';


@Injectable()
export class AuditResolver implements Resolve<Audit> {

  constructor(private auditService: AuditService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Audit> | Promise<Audit> | Audit {
    return this.auditService.getAudit();
  }
}
