import {Component} from '@angular/core';
import {fadeInAnimation} from '../../shared/routing.animation';


@Component({
  selector: 'app-audit',
  templateUrl: 'audit.component.html',
  styleUrls: ['audit.component.scss'],
  animations: [fadeInAnimation],
  host: {
    '[@fadeInAnimation]': ''
  }
})
export class AuditComponent {
}
