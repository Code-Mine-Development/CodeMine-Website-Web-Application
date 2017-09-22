import {Component, Input, EventEmitter, Output, OnInit, HostListener, HostBinding} from '@angular/core';
import {OfferThumbnail} from '../../../../shared/interface/offerThumbnail.interface';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {

  @Input() tools;
  @Input() technologies;
  @Input() currentTools;
  @Input() currentTechnologies;
  @Input() small;

  @Output() navigate = new EventEmitter();

  @HostBinding('class.center') center;

  elements: [OfferThumbnail];

  private breakPoints: number[] = [0, 500, 799, 992, 1350, window.innerWidth];


  constructor() {
  }

  @HostListener('window:resize', []) onResize() {
    this.checkCenter();
  }


  ngOnInit() {
    this.elements = <[OfferThumbnail]>[];
    this.parseTechnologies();
    this.parseTools();
    this.checkCenter();
  }

  parseTechnologies() {
    Object.keys(this.technologies).forEach((key: string) => {
      if (this.currentTechnologies.find((currentKey) => (currentKey === key))) {
        this.pushObject('technologies', key, this.technologies[key]);
      }
    })
  }

  parseTools() {
    Object.keys(this.tools).forEach((key: string) => {
      if (this.currentTools.find((currentKey) => (currentKey === key))) {
        this.pushObject('tools', key, this.tools[key]);
      }
    })
  }

  pushObject(urlSegment: string, key: string, object) {
    this.elements.push({
      key: object.title,
      url: `/${urlSegment}/${key}`,
      icon: object.icon,
      color: object.color
    })
  }

  onNavigate(url: string) {
    this.navigate.emit(url);
  }

  checkCenter() {
    this.center =  !this.small && window.innerWidth > (this.breakPoints[this.elements.length]);
  }
}
