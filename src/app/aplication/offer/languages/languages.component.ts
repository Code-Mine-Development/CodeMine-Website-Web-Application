import {Component, Input} from '@angular/core';
import {Languages} from '../../../shared/interface/languages.interface';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
 @Input() Languages: Languages;
}
