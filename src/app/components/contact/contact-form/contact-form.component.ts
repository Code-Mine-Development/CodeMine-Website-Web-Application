import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {ContactFormService} from '../service/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private translate: TranslateService, private contactService: ContactFormService) {
  }

  ngOnInit() {
    this.applyTextToTextArea();
  }

  applyTextToTextArea() {
    this.translate.get('CONTACT.hello').subscribe((translation: string) => {
      if (!this.message || this.message === '') {
        this.message = translation + '\n\r';
      }
    })
  }

  adjustTextArea(textArea) {
    const scrollHeight = textArea.scrollHeight,
      clientHeight = textArea.clientHeight;
    console.log(scrollHeight, clientHeight);
    textArea.style.height = scrollHeight > clientHeight ? `${scrollHeight}px` : '';
  }

  onSubmit(event, form: NgForm) {
    event.preventDefault();
    if (form.valid) {
      this.contactService.sendRequest(form.value);
    }
  }

}
