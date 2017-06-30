import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-square-image',
    template: `<div [ngStyle]="{'background-image': 'url(' + image + ')'}"><img [src]="image" [ngStyle]=
      "{'width':width + 'px','height':width + 'px'}"></div>`,
    styles: [`:host{border: 1px solid #ddd;background: white;padding: 5px;}img{opacity: 0}
    div{background-size: contain;background-position: center; background-repeat: no-repeat}`]
})
export class SquareImageComponent {
    @Input() width = 100;
    @Input() image = '';
}
