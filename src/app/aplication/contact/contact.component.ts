import {Component, OnInit, HostBinding} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Company} from '../../shared/interface/company.interface';
import {fadeInAnimation} from '../../shared/routing.animation';

@Component ({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class ContactComponent implements OnInit {
  company: Company;
  @HostBinding('class.container') container = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: Data) => {
          this.company = data['company'];
        });
  }

}
