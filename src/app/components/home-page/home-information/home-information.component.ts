import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {HomeInformation} from '../interfaces/home-information.interface';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home-information',
  templateUrl: 'home-information.component.html',
  styleUrls: ['home-information.component.scss']
})
export class HomeInformationComponent implements OnInit {
  informations: HomeInformation[];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.informations = data['homeInformation'];
      });
  }

}
