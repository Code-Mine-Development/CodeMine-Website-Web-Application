import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';
import {Technologies} from '../../../shared/interface/technologies.interface';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit, OnChanges{
 @Input() Technologies: Technologies;
 keys = []

 constructor( private positionService:PreviousPositionService){}

 ngOnChanges(){
   this.keys = Object.keys(this.Technologies);
 }

 ngOnInit(){
   this.positionService.setBackFrom("technologies");
 }
}
