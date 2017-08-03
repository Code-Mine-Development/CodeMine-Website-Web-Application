import {Component, OnInit, OnDestroy, ViewChild, Inject, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {HomeInformation} from '../interfaces/home-information.interface';
import {HomeInformationServices} from '../services/home-information.service';
import {DOCUMENT} from '@angular/common';
import {ScrollToService} from '../../../shared/services/scroll-to.service';
import {ScrollControllerService} from '../services/scroll-controller.service';


@Component({
  selector: 'app-home-information',
  templateUrl: 'home-information.component.html',
  styleUrls: ['home-information.component.scss']
})
export class HomeInformationComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('homeBox') homeBox;
  @ViewChild('sideSlider') sideSlider;

  scrollTop:number = 0;
  informations: HomeInformation[];
  currentElement:number = 1;
  private border = 0;
  private opacity = 0;

  constructor(@Inject(DOCUMENT) private document, private route: ActivatedRoute, private homeInformationService:HomeInformationServices, private scrollToService:ScrollToService, private scrollController:ScrollControllerService ) {}
  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.informations = data['homeInformation'];
      });
  }

  ngOnDestroy(){
    this.homeInformationService.setScrollTop(0);
  }

  ngAfterViewInit(){
    this.scrollController.setScrollingOppoenent(this.homeBox.nativeElement);
  }

  scroll(event){
    this.scrollTop = event.target.scrollTop;
    this.homeInformationService.setScrollTop(event.target.scrollTop);
    this.animateShadowBox(event.target.scrollTop);
    // this.showCurrentTitle(event);
    this.scrollingBackDetector();
  }

  scrollingBackDetector(){
    if(this.getScrollTopPosition() > 0)
      this.scrollToService.scroll("SiteHead");
  }

  animateShadowBox(scrollTop){
    let distance = 1900,
        positionRatio = scrollTop/distance,
        positionFactor = positionRatio > 1 ? 1 : positionRatio;
    this.border = positionFactor/10;

    this.opacity = positionFactor;
  }
  //
  // showCurrentTitle(event) {
  //   let boxes: any = document.querySelectorAll('.box');
  //
  //   for (let i = 0; i < this.informations.length; i++)
  //     if (event.target.scrollTop >= boxes[i].offsetTop - 650)
  //       this.currentElement = i + 1;
  // }
  //
  getScrollTopPosition(){
    return this.document.body.scrollTop || this.document.documentElement.scrollTop;
  }

}
