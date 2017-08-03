import {Component, OnInit, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input('test') test;

  constructor() { }

  ngOnInit() {
  }

}
