import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Portfolio} from "../../../aplication/portfolio/interfaces/portfolio.interface";


@Component({
  selector: 'app-portfolio-project',
  templateUrl: 'portfolio-project.component.html',
  styleUrls: ['portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit {
  @Input() project: Portfolio;
  @Output() onAction: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(){
    this.onAction.emit();
  }

}
