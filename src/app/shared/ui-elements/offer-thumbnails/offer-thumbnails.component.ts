import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {OfferThumbnail} from '../../interface/offerThumbnail.interface';

@Component({
  selector: 'app-offer-thumbnails',
  templateUrl: './offer-thumbnails.component.html',
  styleUrls: ['./offer-thumbnails.component.scss']
})
export class OfferThumbnailsComponent {

  @Input() elements: [OfferThumbnail];
  @Output() navigate = new EventEmitter();

  constructor() {
  }

  onClick(url: string) {
    this.navigate.next(url);
  }

}
