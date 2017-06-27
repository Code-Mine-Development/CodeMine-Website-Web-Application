import { Component, OnInit, Input } from '@angular/core';
import {Portfolio} from '../../../shared/interface/portfolio.interface';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Portfolio;

  constructor() {
  }

  ngOnInit() {

  }
}
