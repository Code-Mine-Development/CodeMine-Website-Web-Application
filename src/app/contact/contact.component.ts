import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {Company} from "../shared/interface/company.interface";

@Component ({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {
  company:Company;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: Data) =>{
          this.company = data['company'];
        });
  }

}
