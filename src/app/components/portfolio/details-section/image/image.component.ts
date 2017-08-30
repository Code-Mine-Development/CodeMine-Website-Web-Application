import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() image;
  @Input() video;
  @Input() title;
  @Input() small;

  constructor() { }

  ngOnInit() {
  }

}
