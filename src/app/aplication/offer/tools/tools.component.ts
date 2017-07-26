import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';
import {Tool} from '../../tools/interface/tool.interface';

@Component({
  selector: 'app-tools',
  templateUrl: 'tools.component.html',
  styleUrls: ['tools.component.scss']
})
export class ToolsComponent implements OnInit, OnChanges{
 @Input() Tools: Tool[];
 keys = [];

  constructor( private positionService:PreviousPositionService){}

  ngOnChanges(){
    this.keys = Object.keys(this.Tools);
  }

  ngOnInit(){
    this.positionService.setBackFrom("tools");
  }
}
