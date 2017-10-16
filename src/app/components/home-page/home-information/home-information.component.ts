import {Component, OnInit, OnDestroy, ElementRef, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {HomeInformation} from '../interfaces/home-information.interface';
import {HomeInformationServices} from '../services/home-information.service';
import {ScrollToService} from '../../../shared/services/scroll-to.service';
import {ScrollController} from '../services/scroll.controller';
import {AnimationConfig} from '../animation.config';
@Component({
  selector: 'app-home-information',
  templateUrl: 'home-information.component.html',
  styleUrls: ['home-information.component.scss']
})
export class HomeInformationComponent implements OnInit, OnDestroy {

  @Output() navigate = new EventEmitter();
  informations: HomeInformation[];
  hiddenSkip = true;
  blackSkip = false;
  visibleMobile = false;


  constructor(private route: ActivatedRoute,
              private homeInformationService: HomeInformationServices,
              private scrollToService: ScrollToService,
              private element: ElementRef,
              private scrollController: ScrollController) {
  }


  ngOnInit() {
    this.checkSkipWhite();
    this.route.data
      .subscribe((data: Data) => {
        this.informations = data['homeInformation'];
      });
    this.homeInformationService.getScrollTopStream().subscribe((scrollTop) => {
      if (scrollTop > 80) {
        this.hiddenSkip = false;
      } else {
        this.hiddenSkip = true;
      }
    })
  }


  ngOnDestroy() {
    this.homeInformationService.setScrollTop(1);
  }

  skip() {
    this.scrollToService.scroll(this.element.nativeElement, 'bottom');
  }

  checkSkipWhite() {
    this.scrollController.getScrollTop().subscribe((info) => {
      if (info.section < 0) {
        return;
      }

      if (info.frame > 0) {
        this.visibleMobile = true;
      } else {
        this.visibleMobile = false;
      }

      if (AnimationConfig.sections[info.section]['background'] !== '#282828') {
        this.blackSkip = true;
      } else {
        this.blackSkip = false;
      }

      if (!info.horizontal) {
        this.blackSkip = false;
      }
    });
  }

  onNavigate() {
    this.navigate.emit('/contact');
  }

}
