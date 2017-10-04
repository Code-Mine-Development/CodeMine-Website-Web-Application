import {Component, OnInit, OnDestroy, Inject, Input, ElementRef} from '@angular/core';
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
  hiddenSkip = true;


  constructor(@Inject(DOCUMENT) private document,
              private route: ActivatedRoute,
              private homeInformationService: HomeInformationServices,
              private scrollToService: ScrollToService,
              private element: ElementRef) {
  }


  ngOnInit() {
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
}
