import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Http } from '@angular/http';
import { LocalizeRouterService } from 'localize-router';
import { Tool } from '../interface/tool.interface';
import { PreviousPositionService } from '../../../shared/services/previous-position.service';

@Component({
  selector: 'app-angular',
  templateUrl: 'tool.component.html',
  styleUrls: ['tool.component.scss']
})
export class ToolComponent implements OnInit {

  @ViewChild("svg") svg;

  private tool:Tool = <Tool>{};

  private next:string;
  private previous:string;

  private URLprefix:string = '/tools/';
  private iconDir:string = 'assets/icons/';


  constructor( private route:ActivatedRoute, private router:Router, private localize:LocalizeRouterService, private previousPosition:PreviousPositionService, private http:Http ) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.parseTechnologies(data["tools"]);
      }
    );
  }

  parseTechnologies( technologies:Tool[] ){
    let urlList = this.router.url.split("/"),
        urlSegment = urlList[urlList.length-1],
        toolsList = Object.keys(technologies),
        tool = technologies[urlSegment] || null,
        toolIndex = toolsList.indexOf(urlSegment),
        nextKey = toolsList[toolIndex+1] || toolsList[0],
        prevKey = toolsList[toolIndex-1] || toolsList[toolsList.length-1];

    if(!tool)
      return this.navigateTo(this.generateLink(toolsList[0]));

    this.next = nextKey;
    this.previous = prevKey;

    this.tool = tool;
    this.getIcon(tool.icon);
  }


  generateLink(technology:string){
    return this.localize.translateRoute(this.URLprefix+technology);
  }

  getBackLink(){
    let previousPage = this.previousPosition.getBackTo();
    return this.localize.translateRoute("/"+previousPage+"/");
  }


  navigateTo(url){
      this.router.navigateByUrl(url);
  }

  getIcon(url:string){
    if(url.length == 0)
      return;
    this.http.get(this.iconDir+url)
      .map( (response) => ( response.text() ))
      .map( (svgfile:string) => {
          let m =  /\<svg[^>]*\>(.*)<\/svg>/g.exec(svgfile)
          if(m != null)
            return m[1];
          return '';
      })
      .subscribe( (svgBody:string) => {
        this.tool.icon = svgBody.replace(/fill=\"[^"]*"/g, '');
        if( this.svg.nativeElement )
          this.svg.nativeElement.innerHTML = svgBody.replace(/fill=\"[^"]*"/g, '');;
      })
  }


}
