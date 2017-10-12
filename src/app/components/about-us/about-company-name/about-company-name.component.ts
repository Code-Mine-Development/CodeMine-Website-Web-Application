import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-about-company-name',
  templateUrl: './about-company-name.component.html',
  styleUrls: ['./about-company-name.component.scss']
})
export class AboutCompanyNameComponent {

  @HostBinding('class.container') container = true;

}
