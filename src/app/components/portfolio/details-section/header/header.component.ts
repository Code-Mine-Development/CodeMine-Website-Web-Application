import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-portfolio-details-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class PortfolioDetailsHeaderComponent implements OnInit {

  @Input() logo;
  @Input() description;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
