import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() icons;

  constructor() { }

  ngOnInit() {
  }

}
