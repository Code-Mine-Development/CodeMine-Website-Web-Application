import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import {Http} from '@angular/http';
import { LocalizeRouterService } from 'localize-router';
import { Technology } from '../interface/technology.interface';
import { PreviousPositionService } from '../../../shared/services/previous-position.service';

@Component({
  selector: 'app-angular',
  templateUrl: 'technology.component.html',
  styleUrls: ['technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  @ViewChild("svg") svg;
  viewBox = "0 0 128 128";

  private technology:Technology = <Technology>{};

  private next:string;
  private previous:string;

  private URLprefix:string = '/technologies/';
  private iconDir:string = 'assets/icons/';

  constructor( private route:ActivatedRoute, private router:Router, private localize:LocalizeRouterService, private previousPosition:PreviousPositionService, private http:Http) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.clearSvg();
        this.parseTechnologies(data["technologies"]);
      }
    );
  }

  clearSvg(){
    if(this.svg && this.svg.nativeElement)
      this.svg.nativeElement.innerHTML =  "";
  }

  parseTechnologies( technologies:Technology[] ){
    let urlList = this.router.url.split("/"),
        urlSegment = urlList[urlList.length-1],
        technologiesList = Object.keys(technologies),
        technology = technologies[urlSegment] || null,
        technologyIndex = technologiesList.indexOf(urlSegment),
        nextKey = technologiesList[technologyIndex+1] || technologiesList[0],
        prevKey = technologiesList[technologyIndex-1] || technologiesList[technologiesList.length-1];

    if(!technology)
      return this.navigateTo(this.generateLink(technologiesList[0]));

    this.next = nextKey;
    this.previous = prevKey;

    this.technology = technology;
    this.getIcon(technology.icon);
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
        let m =  /\<svg.*viewBox\="([^"]*)[^>]*\>(.*)<\/svg>/g.exec(svgfile)
        if(m != null) {
          this.viewBox = m[1];
          return m[2];
        }
        return '';
      })
      .subscribe( (svgBody:string) => {
        if( this.svg.nativeElement )
          this.svg.nativeElement.innerHTML = svgBody.replace(/fill=\"[^"]*"/g, '');;
      })
  }


}
