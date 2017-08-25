import {Component, Input, HostListener, ElementRef, HostBinding} from '@angular/core';

@Component({
  selector: 'app-instagram-photo',
  template: `
    <a [href]="image.link">
      <figure>
        <img [src]="image.images.standard_resolution.url" alt="instagram photo" (load)="loaded()" >
        <figcaption>{{image.caption.text}}</figcaption>
         <div class="cover">
           <p>
              <span class="fa fa-heart" aria-hidden="true"></span><span>{{image.likes.count}}</span>
              <span class="fa fa-comment" aria-hidden="true"></span><span>{{image.comments.count}}</span>
           </p>
        </div>
      </figure>
    </a>
  `,
  styleUrls: ['./instagram-photo.component.scss']
})
export class InstagramPhotoComponent {

  @Input() image;
  @HostBinding('style.height') height;

  constructor( private elementRef: ElementRef ) { }

  @HostListener('window:resize',['$event']) resize(){
    this.setHeight();
  }

  loaded(){
    this.setHeight()
  }

  setHeight(){
    this.height = this.getWidth();
  }

  getWidth(){
    return window.getComputedStyle(this.elementRef.nativeElement).width;
  }

}
