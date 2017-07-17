import {Component, OnInit, Input, ViewChild, AfterViewInit} from '@angular/core';
import {Audit} from '../../../aplication/audit/interfaces/audit.interface';
import {DrawBackgroundService} from "../../../shared/services/draw-background.service";


@Component({
  selector: 'app-audit-details',
  templateUrl: 'audit-details.component.html',
  styleUrls: ['audit-details.component.scss'],

})
export class AuditDetailsComponent implements OnInit, AfterViewInit {
  @Input() audit: Audit[];
  @ViewChild('Canvas1') canvasRef1;
  @ViewChild('Canvas2') canvasRef2;
  @Input() indexID: number;

  constructor(private drawBackgroundService : DrawBackgroundService) {}
  ngOnInit() {};

   ngAfterViewInit() {
     if (this.audit && document.getElementById('triangle0') && document.getElementById('triangle1')) {
       setTimeout(() => {

         this.drawBackgroundService.AuditDetailsBackground(this.canvasRef1, this.canvasRef2)

       }, 1);
     }
   }

     resizeBackground(){
       this.drawBackgroundService.AuditDetailsBackground(this.canvasRef1, this.canvasRef2)
     }



}
