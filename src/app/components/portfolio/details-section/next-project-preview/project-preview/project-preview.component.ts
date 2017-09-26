import {Component, Input, OnChanges, HostBinding, Output, EventEmitter} from '@angular/core';
import {Portfolio} from '../../../../../aplication/portfolio/interfaces/portfolio.interface';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-project-preview',
  templateUrl: 'project-preview.component.html',
  styleUrls: ['project-preview.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('left', style({left: '-100%'})),
      state('right', style({left: '100%'})),
      transition('* => leftVisible', [
        style({left: '-100%'}),
        animate('.5s', style({'left': '0'}))
      ]),
      transition('* => rightVisible', [
        style({left: '100%'}),
        animate('.5s', style({'left': '0'}))
      ]),
      transition('* => right', [
        style({left: '0'}),
        animate('.5s')
      ]),
      transition('* => left', [
        style({left: '0'}),
        animate('.5s')
      ])
    ])
  ]
})
export class ProjectPreviewComponent implements OnChanges {
  @Input() index: number;
  @Input() open: number;
  @Input() project: Portfolio;
  @Input() direction: string;

  @Output() navigate = new EventEmitter();


  @HostBinding('class.center') center;
  animate = 'left';

  constructor() {
  }

  ngOnChanges() {
    if (this.index === this.open) {
      this.center = true;
      if (this.direction === 'next') {
        this.animate = 'rightVisible';
      } else {
        this.animate = 'leftVisible';
      }
    } else {
      this.center = false;
      if (this.direction === 'next') {
        this.animate = 'left';
      } else {
        this.animate = 'right';
      }
    }
    console.log(this.direction, this.animate);
  }

  onNavigate() {
    const projectUrl = '/portfolio/' + this.project.link;
    this.navigate.emit(projectUrl);
  }

}
