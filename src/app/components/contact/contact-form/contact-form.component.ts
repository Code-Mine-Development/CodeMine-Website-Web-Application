import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {ContactFormService} from '../service/contact-form.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('textArea') textArea;
  @ViewChild('emailInput') emailInput;
  @ViewChild('textArea', {read: NgModel}) textAreaModel;

  name: string;
  email: string;
  message: string;
  formStatus: string;

  constructor(private translate: TranslateService, private contactService: ContactFormService) {
  }

  ngOnInit() {
    this.applyTextToTextArea();
    this.adjustTextArea();
    this.setValidator();
  }

  applyTextToTextArea() {
    this.translate.get('CONTACT.hello').subscribe((translation: string) => {
      if (!this.message || this.message === '') {
        this.message = translation + '\n\r';
      }
    })
  }


  adjustTextArea() {
    this.textAreaModel.valueChanges.subscribe(() => {
      const scrollHeight = this.textArea.nativeElement.scrollHeight,
        clientHeight = this.textArea.nativeElement.clientHeight;
      this.textArea.nativeElement.style.height = scrollHeight >= clientHeight ? `${scrollHeight}px` : '';
    });
  }

  setValidator() {
    this.emailInput.control.setValidators((control) => {
      const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value);
      return !email ? {'pattern': control.value} : null
    });
  }

  onSubmit(event, form: NgForm) {
    event.preventDefault();
    if (form.valid) {
      this.formStatus = 'loading';
      this.contactService.sendContactForm(form.value).subscribe(
        (result: boolean) => {
          if (result) {
            this.formStatus = 'valid';
          } else {
            this.formStatus = 'invalid';
          }
        },
        (error) => {
          this.formStatus = 'invalid';
        }
      );
    }
  }
}
