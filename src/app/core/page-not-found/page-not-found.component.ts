import {Component, AfterViewInit} from '@angular/core';
import * as Vivus from 'vivus';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements AfterViewInit {

  private animation;

  ngAfterViewInit() {
    this.animation = new Vivus('svgPlaceholder', {type:'oneByOne', duration: 250,file: 'assets/images/404.svg'});
  }
}
