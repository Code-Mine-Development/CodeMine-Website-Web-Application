import {Component, OnInit} from '@angular/core';
import {AnimationConfig} from '../../../animation.config';

@Component({
  selector: 'app-home-information-text',
  templateUrl: './home-information-text.component.html',
  styleUrls: ['./home-information-text.component.scss']
})
export class HomeInformationTextComponent implements OnInit {

  textsList = AnimationConfig.sections;

  constructor() { }

  ngOnInit() {
  }

}
