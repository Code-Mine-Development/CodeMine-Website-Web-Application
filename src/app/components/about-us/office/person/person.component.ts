import {
  Component,
  HostListener,
  Input,
  HostBinding,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';
import {EventManager} from '../event_manager';
import {Employees} from '../interfaces/employees.interface';
import * as Vivus from 'vivus';

@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.scss']
})
export class PersonComponent implements OnInit, AfterViewInit {

  @Input() eventManager: EventManager;

  @HostBinding('class.visible') visible;

  @ViewChild('funnyCover', {read: ElementRef}) funnyCover;

  visibleElement;
  animationInstance;
  animationElement;

  constructor(private renderer: Renderer2) {
  }

  @HostListener('window:keydown', ['$event']) closePerson(event) {
    if (event.keyCode === 27) {
      this.closeButtonClicked();
    }
  }

  ngOnInit() {
    this.eventManager.on('click', (pers) => this.showPerson(pers));
    this.addDrawCoverEvents();
  }

  ngAfterViewInit() {
  }

  showPerson(person: Employees) {
    this.visibleElement = person;
    this.visible = !!person;
    if (person) {
      this.drawFunnyCover();
      console.log(person);
    }
  }

  closeButtonClicked() {
    this.eventManager.emit('click', null);
  }

  drawFunnyCover() {
    if (this.animationInstance) {
      this.clearSvgBox();
    }

    this.animationInstance = new Vivus('funny-cover', {
      type: 'oneByOne',
      duration: 125,
      animTimingFunction: Vivus.EASE,
      start: 'manual',
      file: 'assets/images/people/funny_cover/' + this.visibleElement.image.funnyCover,
      onReady: (elem) => {
        this.animationElement = elem.el;
      }
    });
  }

  clearSvgBox() {
    this.animationInstance.destroy();
    if (this.animationElement) {
      this.funnyCover.nativeElement.removeChild(this.animationElement);
    }
  }

  addDrawCoverEvents() {
    this.renderer.listen(this.funnyCover.nativeElement, 'mouseenter', () => {
      this.animationInstance.play();
    });

    this.renderer.listen(this.funnyCover.nativeElement, 'mouseleave', () => {
      this.animationInstance.reset().stop();
    });
  }

}

