import {Component, Input, HostBinding, ElementRef, OnChanges, HostListener} from '@angular/core';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.scss']
})
export class ToolTipComponent implements OnChanges {

  @Input() errors;

  @HostBinding('class.visible') visible = false;

  private static getMessage(list) {
    if (!list) {
      return;
    }

    let message = '';

    if (list.required) {
      message = 'CONTACT.form.require';
    } else if (list.pattern) {
      message = 'CONTACT.form.pattern';
    } else {
      message = 'CONTACT.form.sthWentWrong'
    }
    return message;
  }


  constructor(private element: ElementRef) {
  }

  @HostListener('click', []) onClick() {
    this.visible = false;
  }


  ngOnChanges() {
    this.setVisible();
  }

  getMessage(list) {
    return ToolTipComponent.getMessage(list);
  }

  setVisible() {
    if (this.errors) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}
