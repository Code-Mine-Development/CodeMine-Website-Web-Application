import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: '[app-social-service]',
  template: `
    <a [href]="adress"><span [class]="'fa fa-2x fa-'+socialName" aria-hidden="true"></span></a>
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
export class SocialServiceComponent  {

  private defaultColor = '#000000'

  @HostListener('mouseenter') enter(){
    this.mouse('enter');
  }
  @HostListener('mouseleave') leave(){
    this.mouse('leave');
  }

  @Input('color') color: string;
  @Input('socialName') socialName: string;
  @Input('link') adress: string;

  @Output('hoverColor') hoverStream = new EventEmitter();

  constructor() { }

  mouse(state: string){
    const color = state === 'enter' ? this.color : this.defaultColor;
    this.hoverStream.emit(color);
  }
}
