import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../../shared/routing.animation";

@Component({
  selector: 'app-languages',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
  animations:[fadeInAnimation],
  host:{ '[@fadeInAnimation]': '' }
})
export class LanguagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
