import {Component, Input, OnInit} from '@angular/core';
import {Technologies} from "../../../shared/interface/technologies.interface";

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit{
 @Input() Technologies: Technologies;

 ngOnInit(){}
}
