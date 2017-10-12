import {Component, Input, ElementRef, HostListener, HostBinding, Renderer2, ViewChild, OnInit} from '@angular/core';
import {Employees} from '../../interfaces/employees.interface';
import {EventManager} from '../../../../../shared/services/event_manager';
@Component({
  selector: 'app-desk',
  template: `<section class="desk">
         <div class="left"></div>
         <div #animatedElement class="center" (click)="onClick()"></div>
         <div class="right"></div>
      </section>
      `,
  styleUrls: ['desk.component.scss']
})
export class DeskComponent implements OnInit {
  @Input() person: Employees;
  @Input() eventManager: EventManager;

  @ViewChild('animatedElement', {read: ElementRef}) animationElement;

  @HostBinding('class.hover') hover;
  @HostBinding('class.noHover') noHovered;
  @HostBinding('class.clicked') clicked;

  private currentActive;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') mouseEnter() {
    if (this.currentActive) {
      return;
    }
    this.eventManager.emit('hover', this.person)
  }


  @HostListener('mouseleave') mouseLeave() {
    this.eventManager.emit('hover', null)
  }

  onClick() {
    if (this.currentActive) {
      return;
    }
    this.eventManager.emit('click', this.person);
  }

  ngOnInit() {
    this.eventManager.on('hover', (person) => this.isHover(person));
    this.eventManager.on('click', (person) => this.isClicked(person));
    this.prepareCoordinates();
  }

  isHover(person: Employees) {
    this.hover = person === this.person;
    if (person && person !== this.person) {
      this.noHovered = true;
    } else {
      this.noHovered = false;
    }
  }

  isClicked(person: Employees) {
    this.clicked = person === this.person;
    this.currentActive = person;

    if (this.clicked) {
      this.animateMoveCenter();
    } else {
      this.animateBackOnPlace();
    }
  }

  animateMoveCenter() {
    const parentWidth = this.elementRef.nativeElement.offsetParent ? this.elementRef.nativeElement.offsetParent.offsetWidth : 0,
      parentHeight = this.elementRef.nativeElement.offsetParent ? this.elementRef.nativeElement.offsetParent.offsetHeight : 0,
      top = (parentHeight / 2) - this.elementRef.nativeElement.offsetTop - (this.elementRef.nativeElement.offsetHeight / 2),
      left = (parentWidth / 2) - this.elementRef.nativeElement.offsetLeft - (this.elementRef.nativeElement.offsetWidth / 2),
      right = (this.elementRef.nativeElement.offsetLeft + this.elementRef.nativeElement.offsetWidth) - (parentWidth / 2),
      vector = {
        x: 1.25 * top,
        y: top
      };
    if (this.person.deskCoordinate.variant === 1) {
      this.renderer.setStyle(this.animationElement.nativeElement, 'left', vector.x + (left / 1.41) + 'px');
      this.renderer.setStyle(this.animationElement.nativeElement, 'top', vector.y - (left / 1.41) + 'px');
    } else {
      this.renderer.setStyle(this.animationElement.nativeElement, 'right', vector.y + (right / 1.41) + 'px');
      this.renderer.setStyle(this.animationElement.nativeElement, 'top', vector.x - (right / 1.41) + 'px');
    }
  }

  animateBackOnPlace() {
    this.renderer.setStyle(this.animationElement.nativeElement, 'right', '');
    this.renderer.setStyle(this.animationElement.nativeElement, 'top', '');
    this.renderer.setStyle(this.animationElement.nativeElement, 'left', '');
  }

  prepareCoordinates() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', this.person.deskCoordinate.top + '%');
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', this.person.deskCoordinate.left + '%');
    this.renderer.addClass(this.elementRef.nativeElement, this.person.deskCoordinate.variant === 1 ? 'horizontal' : 'vertical');
    this.parseHiddenBorders();
  }

  parseHiddenBorders() {
    if (!this.person.deskCoordinate.hide) {
      return;
    }

    this.person.deskCoordinate.hide.forEach((className) => {
      this.renderer.addClass(this.elementRef.nativeElement, className);
    })
  }


}
