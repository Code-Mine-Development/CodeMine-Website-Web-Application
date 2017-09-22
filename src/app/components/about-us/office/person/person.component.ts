import {Component, HostListener, Input, HostBinding, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import {EventManager} from '../event_manager';
import {Employees} from '../interfaces/employees.interface';
import * as Vivus from 'vivus';
import {ScrollToService} from '../../../../shared/services/scroll-to.service';

@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() eventManager: EventManager;

  @HostBinding('class.visible') visible;

  @ViewChild('funnyCover', {read: ElementRef}) funnyCover;

  visibleElement;
  animationInstance;
  animationElement;

  constructor(private renderer: Renderer2, private scrollToService: ScrollToService, private element: ElementRef ) {
  }

  @HostListener('window:keydown', ['$event']) closePerson(event) {
    if (event.keyCode === 27) {
      this.closeButtonClicked();
    }
  }

  ngOnInit() {
    this.eventManager.on('click', (person) => this.showPerson(person));
    this.addDrawCoverEvents();
  }


  showPerson(person: Employees) {
    this.visibleElement = person;
    this.visible = !!person;
    if (person) {
      this.scrollToService.scroll(this.element.nativeElement,'center');
      this.drawFunnyCover();
    }
  }

  closeButtonClicked() {
    this.eventManager.emit('click', null);
  }

  drawFunnyCover() {
    if (this.animationInstance) {
      this.clearSvgBox();
    }

    if(!this.visibleElement.image.funnyCover){
      return;
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
    this.animationInstance = null;
    if (this.animationElement) {
      this.funnyCover.nativeElement.removeChild(this.animationElement);
    }
  }

  addDrawCoverEvents() {
    this.renderer.listen(this.funnyCover.nativeElement, 'mouseenter', () => {
      if (this.animationInstance) {
        this.animationInstance.play();
      }
    });

    this.renderer.listen(this.funnyCover.nativeElement, 'mouseleave', () => {
      if (this.animationInstance) {
        this.animationInstance.reset().stop();
      }
    });
  }

}

