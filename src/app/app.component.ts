import {Component, OnInit} from '@angular/core';
import WebFont from 'webfontloader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    WebFont.load({
      google: {
        families: ['Proxima Nova']
      }
    });
  }
}
