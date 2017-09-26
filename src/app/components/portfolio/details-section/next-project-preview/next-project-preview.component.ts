import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Portfolio} from '../../../../aplication/portfolio/interfaces/portfolio.interface';

@Component({
  selector: 'app-next-project-preview',
  templateUrl: './next-project-preview.component.html',
  styleUrls: ['./next-project-preview.component.scss']
})
export class NextProjectPreviewComponent implements OnInit {

  @Input() portfolio: Portfolio[];
  @Input() currentElement: string;

  @Output() navigate = new EventEmitter();

  visibleIndex;
  direction = 'next';

  constructor() {
  }

  ngOnInit() {
    const project = this.portfolio.findIndex((element) => (this.currentElement === element.link));

    this.visibleIndex = project ? this.getNextIndex(project) : 0;
  }

  nextProject() {
    this.visibleIndex = this.getNextIndex(this.visibleIndex);
    this.direction = 'next';
  }

  prevProject() {
    this.visibleIndex = this.getPrevIndex(this.visibleIndex);
    this.direction = 'prev';
  }

  getNextIndex(index) {
    return index + 1 === this.portfolio.length ? 0 : index + 1;
  }

  getPrevIndex(index) {
    return index - 1 < 0 ? this.portfolio.length - 1 : index - 1;
  }

  setProject(index) {
    this.direction = this.visibleIndex < index ? 'next' : 'prev';
    this.visibleIndex = index;
  }

  onNavigate(address) {
    this.navigate.emit(address);
  }

}
