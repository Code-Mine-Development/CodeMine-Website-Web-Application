import {Component, Input} from '@angular/core';
import {Company} from '../../../shared/interface/company.interface';


@Component({
  selector: 'app-contact-info',
  templateUrl: 'contact-info.component.html',
  styleUrls: ['contact-info.component.scss']
})
export class ContactInfoComponent {
  @Input() company: Company[];
}
