import {Component, OnInit, Input} from '@angular/core';
import {Company} from "../../shared/interface/company.interface";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  @Input() company:Company[];
  constructor() { }

  ngOnInit() {
  }

}
