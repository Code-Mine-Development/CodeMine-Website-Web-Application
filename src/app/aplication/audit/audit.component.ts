import {
  AfterViewInit, Component, OnInit, ViewChild, HostListener, ElementRef, Renderer2,
  ViewChildren, ContentChild, ContentChildren, ViewContainerRef
} from '@angular/core';
import {Audit} from './interfaces/audit.interface';
import {ActivatedRoute, Data} from '@angular/router';
import {fadeInAnimation} from '../../shared/routing.animation';
import {DrawBackgroundService} from '../../shared/services/draw-background.service';
import {ScrollToService} from '../../shared/services/scroll-to.service';

@Component({
  selector: 'app-audit',
  templateUrl: 'audit.component.html',
  styleUrls: ['audit.component.scss'],
  animations: [fadeInAnimation],
  host: {
    '[@fadeInAnimation]': ''
  }
})
export class AuditComponent implements OnInit, AfterViewInit {

  @ViewChildren('target', {read: ElementRef}) targets;
  audits: Audit[];

  constructor(private route: ActivatedRoute,
              private drawBackgroundService: DrawBackgroundService,
              private elementRef: ElementRef,
              private renderer: Renderer2,
              private scrollToService: ScrollToService) {
  }

  @HostListener('window:resize', []) onResize() {
    this.drawBackgroundService.drawAuditBackground(this.elementRef, this.targets.toArray()[0], this.renderer);
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.audits = data['audit'];
      });
  }

  ngAfterViewInit() {
    this.drawBackgroundService.drawAuditBackground(this.elementRef, this.targets.toArray()[0], this.renderer);
  }

  scrollTo(sectionId: string) {
    this.scrollToService.scroll(this.targets.toArray()[sectionId].nativeElement);
  }

}
