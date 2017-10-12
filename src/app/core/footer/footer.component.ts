import {Component} from '@angular/core';
import {ContactService} from '../../aplication/contact/services/contact.service';
import {Company} from '../../shared/interface/company.interface';
import {CopyToClipboardService} from '../../shared/services/copy-to-clipboard.service';
import {EventManagerService} from '../../shared/services/event-manager.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  company: Company;
  backgroundColor = '#282828';
  copied;
  mobile = false;

  constructor(contact: ContactService, private copyService: CopyToClipboardService, private eventManager: EventManagerService) {
    contact.getCompany().subscribe((company) => {
      this.company = company;
    });
    this.mobile = copyService.detectMobile();
  }

  changeBg(color: string) {
    this.backgroundColor = color;
  }

  copy(text) {
    if (text === '') {
      return;
    }
    if (this.copyService.copy(text)) {
      this.copied = text;
    }
  }

  scrollAnimation(){
    this.eventManager.emit('scrollToSiteHead',true);
  }

}
