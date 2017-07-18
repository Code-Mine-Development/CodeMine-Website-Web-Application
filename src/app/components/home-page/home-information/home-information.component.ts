import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {HomeInformation} from '../interfaces/home-information.interface';
import {HomeInformationServices} from '../services/home-information.service';

@Component({
  selector: 'app-home-information',
  templateUrl: 'home-information.component.html',
  styleUrls: ['home-information.component.scss']
})
export class HomeInformationComponent implements OnInit, OnDestroy {
  informations: HomeInformation[];

  constructor(private route: ActivatedRoute, private homeInformationService:HomeInformationServices) {

  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.informations = data['homeInformation'];
      });
  }

  ngOnDestroy(){
    this.homeInformationService.setScrollTop(0);
    console.log("destroy");
  }

  scroll(event){
    this.homeInformationService.setScrollTop(event.target.scrollTop);
  }

}
