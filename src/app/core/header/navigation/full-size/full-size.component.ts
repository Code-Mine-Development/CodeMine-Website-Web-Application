import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-full-size',
  templateUrl: './full-size.component.html',
  styleUrls: ['./full-size.component.scss']
})
export class FullSizeComponent implements OnInit {

  @Input() navigation;
  @Output() changeLanguage = new EventEmitter();

  constructor( public translate: TranslateService ) { }

  ngOnInit() {
  }

  onChangeLanguage(event, lang){
    event.preventDefault();
    this.changeLanguage.emit(lang);
  }

}
