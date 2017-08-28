import {Component, OnInit, OnDestroy, ViewChild, Inject, AfterViewInit, Input} from '@angular/core';
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
export class HomeInformationComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input('escapeComponent') escapeComponent;

  informations: HomeInformation[];
  private scrollCurrentElementSubscriber;


  constructor(@Inject(DOCUMENT) private document,
              private route: ActivatedRoute,
              private homeInformationService: HomeInformationServices,
              private scrollToService: ScrollToService,
              private scrollController: ScrollController) {
  }

  ngOnInit() {

    this.scrollCurrentElementSubscriber = this.scrollController.getCurrentElementStream().subscribe((value: any) => {
      this.homeInformationService.setScrollTop(value.id);
    });

    this.route.data
      .subscribe((data: Data) => {
        this.informations = data['homeInformation'];
      });
  }

  ngAfterViewInit() {
    this.scrollController.setEscapeElement(this.escapeComponent);
  }

  ngOnDestroy() {
    this.homeInformationService.setScrollTop(1);
    if (this.scrollCurrentElementSubscriber) {
      this.scrollCurrentElementSubscriber.unsubscribe()
    }
  }

  wheelDirectory(directory: string) {
    this.scrollController.setScrollDirectory(directory);
    this.scrollingBackDetector();
  }


  scrollingBackDetector() {
    if (this.getScrollTopPosition() > 0) {
      this.scrollToService.scroll('SiteHead');
    }
  }

  getScrollTopPosition() {
    return this.document.body.scrollTop || this.document.documentElement.scrollTop;
  }

}
