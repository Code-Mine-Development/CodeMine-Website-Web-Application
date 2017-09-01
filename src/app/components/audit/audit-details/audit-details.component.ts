import {Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Audit} from '../../../aplication/audit/interfaces/audit.interface';
import {DrawBackgroundService} from '../../../shared/services/draw-background.service';


@Component({
  selector: 'app-audit-details',
  templateUrl: 'audit-details.component.html',
  styleUrls: ['audit-details.component.scss'],

})
export class AuditDetailsComponent implements OnInit, AfterViewInit {
  @Input() audit: Audit;
  @Input() indexID: number;

  constructor(private drawBackgroundService: DrawBackgroundService) {
  }

  ngOnInit() {
  };

  ngAfterViewInit() {
    this.resizeBackground();
  }

  resizeBackground() {
  //   if (this.audit && this.canvasRef1.nativeElement && this.canvasRef2.nativeElement) {
  //     this.drawBackgroundService.AuditDetailsBackground(this.canvasRef1, this.canvasRef2)
  //   }
  }


}
