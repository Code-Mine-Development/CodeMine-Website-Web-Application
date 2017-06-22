import {Component, NgZone, OnInit} from '@angular/core';

@Component ({
  selector: 'app-usability',
  templateUrl: './usability.component.html',
  styleUrls: ['./usability.component.scss']
})
export class UsabilityComponent implements OnInit {
  width: number = window.innerWidth;

  constructor(ngZone: NgZone) {
    window.onresize = () => {
      ngZone.run(() => {
        this.width = window.innerWidth;
      });
    };
  }

  ngOnInit() {
  }

}
