import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../shared/routing.animation';

@Component({
  selector: 'app-we-create',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class WeCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
