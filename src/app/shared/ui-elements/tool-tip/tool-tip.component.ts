import {Component, Input, HostBinding, ElementRef, OnChanges, HostListener} from '@angular/core';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.scss']
})
export class ToolTipComponent implements OnChanges {

  @Input() errors;
  @HostBinding('class.right') right;
  @HostBinding('class.bottom') bottom;
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

  private static calculateFullOffsetLeft(element: HTMLElement) {
    let offsetLeft = element.offsetLeft,
      parent: any = element.offsetParent;

    while (parent) {
      offsetLeft += parent.offsetLeft;
      parent = parent.offsetParent;
    }
    return offsetLeft;
  }

  constructor(private element: ElementRef) {
  }

  @HostListener('click', []) onClick() {
    this.visible = false;
  }

  @HostListener('window:resize', []) onResize() {
    this.chooseClass();
  }


  ngOnChanges() {
    this.chooseClass();
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

  chooseClass() {
    if (!this.element || !this.element.nativeElement) {
      return;
    }
    const spaceAfterContainer = window.innerWidth -
      (ToolTipComponent.calculateFullOffsetLeft(this.element.nativeElement.offsetParent) +
      this.element.nativeElement.offsetParent.offsetWidth);

    if (spaceAfterContainer > this.element.nativeElement.offsetWidth) {
      this.bottom = false;
      this.right = true;
    } else {
      this.bottom = true;
      this.right = false;
    }

  }

}
