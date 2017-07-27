import {Component, Input, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {LocalizeRouterService} from 'localize-router';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';
import {Tool} from '../../tools/interface/tool.interface';

@Component({
  selector: 'app-tools',
  templateUrl: 'tools.component.html',
  styleUrls: ['tools.component.scss']
})
export class ToolsComponent implements OnChanges{
 @Input() Tools: Tool[];
 keys = [];

  constructor( private positionService:PreviousPositionService, private router:Router, private localize:LocalizeRouterService){}


  ngOnChanges(){
    this.keys = Object.keys(this.Tools);
  }

  navigate(url:string){
    this.positionService.setBackCategory("tools");
    let link:string = <string>this.localize.translateRoute(url);
    this.router.navigateByUrl(link);
  }

}
