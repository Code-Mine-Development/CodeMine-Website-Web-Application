import {Component, OnInit, OnDestroy, ViewChild, Inject} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {HomeInformation} from '../interfaces/home-information.interface';
import {HomeInformationServices} from '../services/home-information.service';
import {DOCUMENT} from '@angular/common';
import {ScrollToService} from '../../../shared/services/scroll-to.service';


@Component({
  selector: 'app-home-information',
  templateUrl: 'home-information.component.html',
  styleUrls: ['home-information.component.scss']
})
export class HomeInformationComponent implements OnInit, OnDestroy {
  informations: HomeInformation[];
  @ViewChild('homeBox') homeBox;
  @ViewChild('sideSlider') sideSlider;

  currentElement = 1;
  private border = 0;
  private opacity = 0;

  constructor(@Inject(DOCUMENT) private document, private route: ActivatedRoute, private homeInformationService: HomeInformationServices, private scrollToService: ScrollToService ) {}
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
    this.animateShadowBox(event.target.scrollTop);
    this.showCurrentTitle(event);
    this.scrollingBackDetector();
  }

  scrollingBackDetector(){
    if (this.getScrollTopPosition() > 0)
      this.scrollToService.scroll('SiteHead');
  }

  animateShadowBox(scrollTop){
    const distance = 1900,
        positionRatio = scrollTop / distance,
        positionFactor = positionRatio > 1 ? 1 : positionRatio;
    this.border = positionFactor / 10;

    this.opacity = positionFactor;
  }

  showCurrentTitle(event) {
    const boxes: any = document.querySelectorAll('.box');

    for (let i = 0; i < this.informations.length; i++)
      if (event.target.scrollTop >= boxes[i].offsetTop - 650)
        this.currentElement = i + 1;
  }

  getScrollTopPosition(){
    return this.document.body.scrollTop || this.document.documentElement.scrollTop;
  }

}
