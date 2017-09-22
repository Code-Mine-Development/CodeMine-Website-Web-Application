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
  mobile = false;

  constructor(private copyService: CopyToClipboardService) {
    this.mobile = copyService.detectMobile();
  }

  copy(text: string) {
    if(text === ''){
      return;
    }
    this.currentCopy = this.copyService.copy(text) ? text : '';
  }
}
