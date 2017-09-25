import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Portfolio} from '../../../aplication/portfolio/interfaces/portfolio.interface';
import {OfferElementBeforePrepare} from '../../../aplication/offerElementsDetails/interface/offerElementBeforePrepare';


@Component({
  selector: 'app-portfolio-project',
  templateUrl: 'portfolio-project.component.html',
  styleUrls: ['portfolio-project.component.scss']
})
export class PortfolioProjectComponent {
  @Input() project: Portfolio;
  @Input() tools: OfferElementBeforePrepare[];
  @Input() technologies: OfferElementBeforePrepare[];

  @Output() onAction: EventEmitter<string> = new EventEmitter();
  @Output() navigate: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  onClick(event) {
    event.preventDefault();
    this.onAction.emit();
  }

  onNavigate(event) {
    this.navigate.emit(event);
  }
}
