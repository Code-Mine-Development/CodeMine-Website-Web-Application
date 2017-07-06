import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Portfolio} from '../../../aplication/portfolio/interfaces/portfolio.interface';


@Component({
  selector: 'app-portfolio-project',
  templateUrl: 'portfolio-project.component.html',
  styleUrls: ['portfolio-project.component.scss']
})
export class PortfolioProjectComponent {
  @Input() project: Portfolio;
  @Output() onAction: EventEmitter<string> = new EventEmitter();

  constructor() {}
  onClick() {
    this.onAction.emit();
  }
}
