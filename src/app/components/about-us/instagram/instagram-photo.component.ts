import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instagram-photo',
  template: `
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
  `,
  styleUrls: ['./instagram-photo.component.scss']
})
export class InstagramPhotoComponent implements OnInit {

  @Input() image;

  constructor() { }

  ngOnInit() {
  }

}
