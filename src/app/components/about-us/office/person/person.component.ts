import {
  Component, HostListener, Input, HostBinding, OnInit, ViewChild, ElementRef, Renderer2,
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

  constructor(private renderer: Renderer2) {
  }

  @HostListener('window:keydown', ['$event']) closePerson(event) {
    if (event.keyCode === 27) {
      this.closeButtonClicked();
    }
  }

  ngOnInit() {
    this.eventManager.on('click', (person) => this.showPerson(person));
  }

  ngAfterViewInit(){
  }

  showPerson(person: Employees) {
    this.visibleElement = person;
    this.visible = !!person;
    this.drawFunnyCover();
  }

  closeButtonClicked() {
    this.eventManager.emit('click', null);
  }

  drawFunnyCover() {
    console.log(document.querySelector('#funny-cover'));
    const animationInstance = new Vivus('funny-cover', {
      type: 'delayed',
      animTimingFunction: Vivus.EASE,
      start: 'manual',
      file: "assets/images/home-svg/logika.svg"
    });

    this.renderer.listen(this.funnyCover.nativeElement, 'mouseenter', () => {
      animationInstance.start();
    });

    this.renderer.listen(this.funnyCover.nativeElement, 'mouseleave', () => {
      animationInstance.reset().stop();
    });
  }

}

