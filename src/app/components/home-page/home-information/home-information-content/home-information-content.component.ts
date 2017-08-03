import {Component, Input, ViewChild, OnChanges, AfterViewInit} from '@angular/core';
import {HomeInformation} from '../../interfaces/home-information.interface';
import {ScrollControllerService, Duration} from '../../services/scroll-controller.service';

@Component({
  selector: 'app-home-information-content',
  templateUrl: './home-information-content.component.html',
  styleUrls: ['./home-information-content.component.scss']
})
export class HomeInformationContentComponent implements AfterViewInit {

  @Input() informations: HomeInformation[];

  @ViewChild('informationsBox') informationSections;

  private currentSection = -1;

  constructor( private scrollControllerService:ScrollControllerService ) { }

  ngAfterViewInit(){
    this.createPositionList()
  }


  createPositionList(){
    let elements:HTMLCollection = this.informationSections.nativeElement.children,
        positionList:[Duration] = <[Duration]>[];

    for(let elementId in elements){
      let element:HTMLElement = <HTMLElement>elements[elementId];
      if(element.offsetTop && element.offsetHeight)
        positionList.push({ start: element.offsetTop, end: element.offsetTop + element.offsetHeight} );
    }

    this.scrollControllerService.setScrollPositions(positionList);
  }

}
