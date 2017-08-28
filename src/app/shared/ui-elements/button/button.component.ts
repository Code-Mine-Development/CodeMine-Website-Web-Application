import {Component, Input, HostBinding, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button>{{title}}</button>',
  styles: [`
            :host{
                border-radius: 15px;
            }
            button{
                cursor: pointer;
                border: none;
                background: transparent;
                color: white;
                border-radius: 15px;
                padding: 10px 40px;
                font-size: 20px;
            }
    `]
})
export class ButtonComponent implements OnInit {
  @Input() title = 'Button';
  @Input() color = '#169bd5';
  @Input() hover = '#000000';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.color;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.hover;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.color
  }
}
