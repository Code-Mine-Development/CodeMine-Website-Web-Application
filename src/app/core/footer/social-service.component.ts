import {Component, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: '[app-social-service]',
  template: `
    <a [href]="link"><span [class]="'fa fa-2x fa-'+socialName" aria-hidden="true"></span></a>
  `,
  styles: [`
    :host {
      padding:0 15px;
    }
    a {
        color:#ffffff;
     }
  `]
})
export class SocialServiceComponent {

  @Input() color: string;
  @Input() socialName: string;
  @Input() link: string;

  @Output() hoverColor = new EventEmitter();

  private defaultColor = '#000000';

  constructor() {
  }

  @HostListener('mouseenter') enter() {
    this.mouse('enter');
  }

  @HostListener('mouseleave') leave() {
    this.mouse('leave');
  }

  mouse(state: string) {
    const color = state === 'enter' ? this.color : this.defaultColor;
    this.hoverColor.emit(color);
  }
}
