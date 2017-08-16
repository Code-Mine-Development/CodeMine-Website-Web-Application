import {Component, OnInit, OnDestroy, ViewChild, Inject, AfterViewInit, Input} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {HomeInformation} from '../interfaces/home-information.interface';
import {HomeInformationServices} from '../services/home-information.service';
import {DOCUMENT} from '@angular/common';
import {ScrollToService} from '../../../shared/services/scroll-to.service';
import {ScrollController} from '../services/scroll.controller';

enum scrollSimulation{
    show,
    hide
}

@Component({
  selector: 'app-home-information',
  templateUrl: 'home-information.component.html',
  styleUrls: ['home-information.component.scss']
})
export class HomeInformationComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input('escapeComponent') escapeComponent;

  informations: HomeInformation[];
  private simulateScrollFrame;
  private scrollSimulationDuration = 500;
  private scrollSimulationLength = window.innerHeight < 500 ? 500 : window.innerHeight;

  private scrollCurrentElementSubscriber;



  constructor(@Inject(DOCUMENT) private document, private route: ActivatedRoute, private homeInformationService:HomeInformationServices, private scrollToService:ScrollToService, private scrollController:ScrollController ) {}

  ngOnInit() {
    let prevElement = 1;

    this.scrollCurrentElementSubscriber = this.scrollController.getCurrentElementStream().subscribe( (value:any) => {
      if(prevElement > value.id && value.id == 1) {
        this.simulateScroll(scrollSimulation.show);
      }
      else if( prevElement == 1 && value.id > 1){
        this.simulateScroll(scrollSimulation.hide);
      }
      prevElement = value.id;
    });

    this.route.data
      .subscribe((data: Data) => {
        this.informations = data['homeInformation'];
      });
  }

  ngAfterViewInit(){
    this.scrollController.setEscapeElement(this.escapeComponent);
  }

  simulateScroll(state){

    if(this.simulateScrollFrame)
      return;

    let start;

    const scrollAnimationFunction = timestamp => {
        if(!start) start = timestamp;
        let progress = (timestamp - start)/this.scrollSimulationDuration,
            position = state === scrollSimulation.show ? this.scrollSimulationLength - this.scrollSimulationLength * progress : this.scrollSimulationLength * progress;

        this.homeInformationService.setScrollTop(position);
        if( timestamp < start + this.scrollSimulationDuration)
          this.simulateScrollFrame = window.requestAnimationFrame(scrollAnimationFunction.bind(this));
        else
          this.simulateScrollFrame = null;
    };

    this.simulateScrollFrame = window.requestAnimationFrame(scrollAnimationFunction.bind(this));
  }

  ngOnDestroy(){
    this.homeInformationService.setScrollTop(0);
    if(this.scrollCurrentElementSubscriber)
      this.scrollCurrentElementSubscriber.unsubscribe()
  }

  wheelDirectory(directory:string){
    this.scrollController.setScrollDirectory(directory);
    this.scrollingBackDetector();
  }


  scrollingBackDetector(){
    if(this.getScrollTopPosition() > 0)
      this.scrollToService.scroll("SiteHead");
  }

  getScrollTopPosition(){
    return this.document.body.scrollTop || this.document.documentElement.scrollTop;
  }

}
