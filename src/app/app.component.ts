import {Component, OnInit} from '@angular/core';
import WebFont from 'webfontloader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    WebFont.load({
      google: {
        families: ['Proxima Nova']
      }
    });
  }
}
