import {Component, OnInit} from '@angular/core';
import {Audit} from "./audit.interface";
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  audits:Audit[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: Data) =>{
          this.audits = data['audit'];
          console.log(this.audits)
        });
  }

  onSkip(event: Event, el: HTMLElement) {
    event.preventDefault();
    el.scrollIntoView();
  }

}
