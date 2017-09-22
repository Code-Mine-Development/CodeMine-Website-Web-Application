import {Component, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'app-instagram-photo',
  template: `
    <div class="box">
      <a [href]="image.link">
        <figure>
          <img [src]="image.images.standard_resolution.url" alt="instagram photo" >
          <figcaption>{{image.caption.text}}</figcaption>
           <div class="cover">
             <p>
                <span class="fa fa-heart" aria-hidden="true"></span><span>{{image.likes.count}}</span>
                <span class="fa fa-comment" aria-hidden="true"></span><span>{{image.comments.count}}</span>
             </p>
           </div>
        </figure>
      </a>
    </div>

  `,
  styleUrls: ['./instagram-photo.component.scss']
})
export class InstagramPhotoComponent {

  @Input() image;

  constructor(private elementRef: ElementRef) {
  }

}
