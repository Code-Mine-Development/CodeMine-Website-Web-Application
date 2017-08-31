import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-info',
  template: `
    <p>
      {{'PORTFOLIO.starInfo' | translate}}
    </p>
  `,
  styleUrls: ['./star-info.component.scss']
})
export class StarInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
