import {Component, Input, HostBinding, HostListener} from '@angular/core';

@Component({
    selector: 'app-close',
    template: '<div><label></label><label></label></div>',
    styles: [`
      div {
        position: relative;
        cursor: pointer;
        width: 40px;
        height: 40px;
      }
      label{
        width: 100%;
        height: 2px;
        background: black;
        position: absolute;
        transform-origin: center;
        top: 50%;
      }
      label:first-child{
        transform: rotate(45deg) translateY(-50%);
      }
      label:last-child{
        transform: rotate(-45deg) translateY(-50%);
      }
    `]
})
export class CloseComponent {


}
