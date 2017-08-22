import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-two-images',
  templateUrl: './two-images.component.html',
  styleUrls: ['./two-images.component.scss']
})
export class TwoImagesComponent implements OnInit {

  @Input() images;

  constructor() { }

  ngOnInit() {
  }

}
