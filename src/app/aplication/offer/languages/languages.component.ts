import {Component, Input, OnInit} from '@angular/core';
import {Languages} from '../../../shared/interface/languages.interface';
import {PreviousPositionService} from '../../../shared/services/previous-position.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit{
 @Input() Languages: Languages;

  constructor( private positionService:PreviousPositionService){}

  ngOnInit(){
    this.positionService.setBackFrom("languages");
  }
}
