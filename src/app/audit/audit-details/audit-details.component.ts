import {Component, OnInit, NgZone, Input} from '@angular/core';
import {Audit} from "../audit.interface";

@Component({
  selector: 'app-audit-details',
  templateUrl: './audit-details.component.html',
  styleUrls: ['./audit-details.component.scss']
})
export class AuditDetailsComponent implements OnInit {
  width: number = window.innerWidth;
  @Input() audit: Audit[];


  constructor(ngZone: NgZone) {
    window.onresize = () => {
      ngZone.run(() => {
        this.width = window.innerWidth;
      });
    };
  }

  ngOnInit() {
    console.log(this.audit)
  }

}
