import {Component, Input, OnInit} from '@angular/core';
import {WeCreate} from "../../../shared/interface/we-create.interface";


@Component({
  selector: 'app-we-create',
  templateUrl: './weCreate.component.html',
  styleUrls: ['./weCreate.component.scss']
})
export class WeCreateComponent implements OnInit {
  @Input() WeCreate: WeCreate;


  ngOnInit() {
  }
}
