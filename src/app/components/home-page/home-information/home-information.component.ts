import {Component, OnInit, OnDestroy, Inject, Input} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {HomeInformation} from '../interfaces/home-information.interface';
import {HomeInformationServices} from '../services/home-information.service';
import {DOCUMENT} from '@angular/common';
import {ScrollToService} from '../../../shared/services/scroll-to.service';
import {ScrollController} from '../services/scroll.controller';

@Component({
  selector: 'app-home-information',
  templateUrl: 'home-information.component.html',
  styleUrls: ['home-information.component.scss']
})
export class HomeInformationComponent implements OnInit, OnDestroy {

  @Input('escapeComponent') escapeComponent;

  informations: HomeInformation[];


  constructor(@Inject(DOCUMENT) private document,
              private route: ActivatedRoute,
              private homeInformationService: HomeInformationServices,
              private scrollToService: ScrollToService,
              private scrollController: ScrollController) {
  }


  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.informations = data['homeInformation'];
      });
  }


  ngOnDestroy() {
    this.homeInformationService.setScrollTop(1);
  }


  getScrollTopPosition() {
    return this.document.body.scrollTop || this.document.documentElement.scrollTop;
  }

}
