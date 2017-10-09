import {Component, OnInit, Input, Output, EventEmitter, HostBinding} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  @HostBinding('class.white') @Input() HiddenBG;
  @Input() navigation;
  @Output() changeLanguage = new EventEmitter();

  @HostBinding('class.active') active = false;

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

  toggleHamburger() {
    this.active = !this.active;
  }

  onLanguageChange(lang) {
    this.changeLanguage.emit(lang);
  }

}
