import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Audit} from './interfaces/audit.interface';
import {ActivatedRoute, Data} from '@angular/router';
import {fadeInAnimation} from "../../shared/routing.animation";
import {DrawBackgroundService} from "../../shared/services/draw-background.service";

@Component({
  selector: 'app-audit',
  templateUrl: 'audit.component.html',
  styleUrls: ['audit.component.scss'],
  animations: [fadeInAnimation],
  host:{ '[@fadeInAnimation]':'' }
})
export class AuditComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef;
  audits: Audit[];

  constructor(private route: ActivatedRoute, private drawBackgroundService: DrawBackgroundService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.audits = data['audit'];
      });
    }
  ngAfterViewInit() {

    if (document.getElementById('triangle-head')) {
      setTimeout(() => {
        this.drawBackgroundService.AuditBackground(this.canvasRef)
      }, 1);

    }
  }
  resizeBackground() {
    this.drawBackgroundService.AuditBackground(this.canvasRef)
  }
}
