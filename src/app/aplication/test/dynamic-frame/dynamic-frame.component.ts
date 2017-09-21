import {Component, OnInit, Input, OnChanges, Renderer2, ElementRef} from '@angular/core';
import {PNGFramePreloader} from './frame_preloader';


@Component({
  selector: 'app-dynamic-frame',
  templateUrl: './dynamic-frame.component.html',
  styleUrls: ['./dynamic-frame.component.scss']
})
export class DynamicFrameComponent implements OnInit, OnChanges {

  @Input() frame = 0;

  private preloader = new PNGFramePreloader(this.renderer, 'assets/test_images/codemine_anim_full1_0', 1600);
  private img;

  constructor(private renderer: Renderer2, private element: ElementRef) {
  }

  ngOnInit() {
    this.img = this.renderer.createElement('img');
    this.renderer.appendChild(this.element.nativeElement, this.img);
    this.img.src = this.preloader.getPath(0);
    this.preloader.addLoader(0);
  }

  ngOnChanges() {
    if (this.img) {
      this.img.src = this.preloader.getPath(this.frame);
    }
  }

}
