import {Component, OnInit, OnDestroy, ViewChild, ViewChildren, AfterViewInit} from '@angular/core';
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
  @ViewChild('homeBox') homeBox;
  @ViewChild('sideSlider') sideSlider;

  prevElement:number;
  currentElement:number = 1;
  lastElement:number = 7;

  constructor(private route: ActivatedRoute, private homeInformationService:HomeInformationServices) {}
  ngOnInit() {

    this.route.data
      .subscribe((data: Data) => {
        this.informations = data['homeInformation'];
      });
  }

  ngOnDestroy(){
    this.homeInformationService.setScrollTop(0);
  }

  scroll(event){
    this.homeInformationService.setScrollTop(event.target.scrollTop);
    this.animateShadowBox(event);
    this.showCurrentTitle(event);
  }

  animateShadowBox(event){
    let distance = 1900;
    let positionRatio = event.target.scrollTop/distance;
    let positionFactor = positionRatio>1 ? 1 : positionRatio;
    this.homeBox.nativeElement.style.boxShadow = `inset 0 0 10px 10px rgba(0,0,0,${positionFactor/10})`;
    this.sideSlider.nativeElement.style.opacity = positionFactor;
  }

  showCurrentTitle(event){
    let boxes:any = document.querySelectorAll('.box');

    for(let i = 0; i<this.informations.length; i++)
    if(event.target.scrollTop >= boxes[i].offsetTop - 650){
      this.currentElement =i + 1;
      this.prevElement = i >0 ? i : null;
    }
  }

}
