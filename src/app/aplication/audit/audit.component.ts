import {Component} from '@angular/core';
import {fadeInAnimation} from '../../shared/routing.animation';
import {LocalizeRouterService} from 'localize-router';
import {Router} from '@angular/router';


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

  constructor(private localize: LocalizeRouterService, private router: Router) {
  }

  navigate() {
    const url = <string>this.localize.translateRoute('/contact');
    this.router.navigateByUrl(url);
  }
}
