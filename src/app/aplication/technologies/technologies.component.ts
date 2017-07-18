import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../shared/routing.animation";

@Component({
  selector: 'app-technologies',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
  animations:[fadeInAnimation],
  host:{ '[@fadeInAnimation]': '' }
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
