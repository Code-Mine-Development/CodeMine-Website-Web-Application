import {Component, Input} from '@angular/core';
import {Company} from '../../../shared/interface/company.interface';
import {CopyToClipboardService} from '../../../shared/services/copy-to-clipboard.service';


@Component({
  selector: 'app-contact-info',
  templateUrl: 'contact-info.component.html',
  styleUrls: ['contact-info.component.scss']
})
export class ContactInfoComponent {
  @Input() company: Company;

  currentCopy;

  constructor(private copyService: CopyToClipboardService) {
  }

  copy(text: string) {
    this.currentCopy = this.copyService.copy(text) ? text : '';
  }
}
