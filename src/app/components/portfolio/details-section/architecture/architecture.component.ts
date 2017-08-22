import {Component, Input, EventEmitter, Output, OnChanges} from '@angular/core';
import {OfferThumbnail} from '../../../../shared/interface/offerThumbnail.interface';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnChanges {

  @Input() tools;
  @Input() technologies;
  @Input() currentTools;
  @Input() currentTechnologies;

  @Output() navigate = new EventEmitter();

  elements: [OfferThumbnail];


  constructor() {
  }

  ngOnChanges() {
    this.elements = <[OfferThumbnail]>[];
    this.parseTechnologies();
    this.parseTools();
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
      key: key,
      url: `/${urlSegment}/${key}`,
      icon: object.icon
    })
  }

  onNavigate(url: string) {
    this.navigate.emit(url);
  }

}
