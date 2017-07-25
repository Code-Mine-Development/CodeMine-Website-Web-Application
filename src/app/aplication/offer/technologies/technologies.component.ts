import {Component, Input, OnInit} from '@angular/core';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';
import {Technologies} from '../../../shared/interface/technologies.interface';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit{
 @Input() Technologies: Technologies;

 constructor( private positionService:PreviousPositionService){}

 ngOnInit(){
   this.positionService.setBackFrom("technologies");
 }
}
