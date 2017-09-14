import {Component, NgZone} from '@angular/core';
import {ContactService} from '../../aplication/contact/services/contact.service';
import {Company} from '../../shared/interface/company.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  company: Company;
  backgroundColor = '#282828';

  constructor(contact: ContactService) {
    contact.getCompany().subscribe((company) => {
      this.company = company;
    })
  }

  changeBg(color: string) {
    this.backgroundColor = color;
  }

}
