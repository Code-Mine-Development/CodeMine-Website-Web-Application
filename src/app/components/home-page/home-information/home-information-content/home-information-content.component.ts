import {Component, OnInit, HostListener, ViewChild, ElementRef, HostBinding} from '@angular/core';
import {AnimationConfig} from '../../animation.config';
import {ScrollController} from '../../services/scroll.controller';

@Component({
  selector: 'app-home-information-content',
  templateUrl: './home-information-content.component.html',
  styleUrls: ['./home-information-content.component.scss']
})
export class HomeInformationContentComponent implements OnInit {

  @ViewChild('scrollableBox', {read: ElementRef}) scrollableBox: ElementRef;

  @HostBinding('class.box') boxContainer;
  @HostBinding('class.hidden_motto') hideMotto;

  duration = AnimationConfig.duration;
  shaftPosition = 0;

  constructor(private scrollController: ScrollController) {
  }

  @HostListener('window:resize',[]) onResize(){
    this.calculateShaftPosition();
  }

  ngOnInit() {
    this.calculateBoxSize();
    this.calculateShaftPosition();
  }

  onScroll() {
    this.scrollController.setScrollTop(this.scrollableBox.nativeElement.scrollTop, window.innerHeight);
    this.calculateBoxSize();
  }

  calculateBoxSize() {
    if (this.scrollableBox.nativeElement.scrollTop > 100) {
      this.boxContainer = true;
    } else {
      this.boxContainer = false;
    }
  }

  calculateShaftPosition() {

    if (window.innerHeight * 1.7 > window.innerWidth){
      this.shaftPosition = -((window.innerHeight * 1.7 - window.innerWidth ) / 2);
      this.hideMotto = false;
    }
    if (window.innerHeight * 1.06 > window.innerWidth) {
      this.shaftPosition = -((window.innerHeight * 1.06 - window.innerWidth ) / 2);
      this.hideMotto = true;
    }
    if (window.innerHeight * 1.7 < window.innerWidth) {
      this.shaftPosition = 0;
      this.hideMotto = false;
    }
  }
}
