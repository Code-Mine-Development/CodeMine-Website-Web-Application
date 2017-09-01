import {Component, OnInit, Renderer2, ViewChild, HostListener} from '@angular/core';
import {element} from 'protractor';
import {forEach} from '@angular/router/src/utils/collection';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @ViewChild('target') target

  private elementList = [];
  private currentFrame = 0;
  private videoFrames = 300;
  private videoDuration = 5000;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.generateVideo();
    this.setVisible();
  }

  @HostListener('window:scroll', []) onScroll() {
    const times = this.getScrollTop() / this.videoDuration,
      currentProgress = this.getScrollTop() - (Math.floor(times) * this.videoDuration),
      visibleElement = (currentProgress / this.videoDuration) * this.elementList.length;
    this.currentFrame = +visibleElement.toFixed(0);
    this.setVisible(this.currentFrame);
  }

  getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop;
  }

  setVisible(frame = this.currentFrame) {
    this.elementList.forEach((element, index) => {
      if (index !== frame) {
        this.renderer.removeClass(element, 'visible');
      } else {
        this.renderer.addClass(element, 'visible');
      }
    })
  }

  generateVideo() {
    for (let i = 0; i < this.videoFrames; i++) {
      this.createFrame('assets/testImages/midocean_1004' + this.parseId(i) + '.png')
    }
  }

  parseId(index: number) {
    let id;
    if (index < 10) {
      id = '00' + index
    } else if (index < 100) {
      id = '0' + index;
    } else if (index < 1000) {
      id = index;
    }
    return id;
  }

  createFrame(url: string) {
    const element = this.renderer.createElement('img');
    this.renderer.setProperty(element, 'src', url);
    this.renderer.addClass(element, 'image');
    this.renderer.appendChild(this.target.nativeElement, element)
    this.elementList.push(element);
  }
}
