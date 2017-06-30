import { Component, OnInit, Input } from '@angular/core';
import {Portfolio} from '../../../aplication/portfolio/interfaces/portfolio.interface';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-portfolio-project',
  templateUrl: 'portfolio-project.component.html',
  styleUrls: ['portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit {
  @Input() project: Portfolio;
  @Input() index: number;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {}
  showDetails() {
    this.router.navigate(['/portfolio/', this.index], {relativeTo: this.route})
  }
}
