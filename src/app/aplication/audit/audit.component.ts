import {
  AfterViewInit, Component, OnInit, ViewChild, HostListener, ElementRef, Renderer2,
  ViewChildren
} from '@angular/core';
import {Audit} from './interfaces/audit.interface';
import {ActivatedRoute, Data} from '@angular/router';
import {fadeInAnimation} from '../../shared/routing.animation';
import {DrawBackgroundService} from '../../shared/services/draw-background.service';

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

  @ViewChildren('target') targets;
  audits: Audit[];

  constructor(private route: ActivatedRoute, private drawBackgroundService: DrawBackgroundService, private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.audits = data['audit'];
      });
  }

  ngAfterViewInit() {
    this.drawBackgroundService.drawAuditBackground(this.elementRef, this.renderer);
  }

}
