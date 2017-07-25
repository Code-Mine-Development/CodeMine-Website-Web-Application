import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { LocalizeRouterService } from 'localize-router';
import { Technology } from '../interface/technology.interface';
import { PreviousPositionService } from '../../../shared/services/previous-position.service';

@Component({
  selector: 'app-angular',
  templateUrl: 'technology.component.html',
  styleUrls: ['technology.component.scss']
})
export class TechnologyComponent implements OnInit {


  private technology:Technology = <Technology>{};

  private next:string;
  private previous:string;

  private URLprefix:string = '/technologies/';


  constructor( private route:ActivatedRoute, private router:Router, private localize:LocalizeRouterService, private previousPosition:PreviousPositionService ) {
  }

  ngOnInit() {
    this.route.data.subscribe(
      (data) => {
        this.parseTechnologies(data["technologies"]);
      }
    );
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


}
