import { Component, OnInit } from '@angular/core';
import * as Instafeed from 'instafeed.js';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {

  private feed;
  private imgLimit = 12;
  private imagesData: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.feed = new Instafeed({
      get: 'user',
      userId: 2235823138,
      accessToken: '2235823138.4c422c8.abac6c5259ae4c3db191820f178aa940',
      resolution: 'standard_resolution',
      limit: this.imgLimit,
      mock: true,
      success: (response) => {
        this.imagesData = response.data;
      }
    });

    this.feed.run();
  }


}
