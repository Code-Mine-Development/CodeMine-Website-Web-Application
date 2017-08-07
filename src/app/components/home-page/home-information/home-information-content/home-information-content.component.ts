import {Component, Input, OnDestroy, HostBinding} from '@angular/core';
import {HomeInformation} from '../../interfaces/home-information.interface';
import {ScrollController} from '../../services/scroll.controller';

@Component({
  selector: 'app-home-information-content',
  templateUrl: './home-information-content.component.html',
  styleUrls: ['./home-information-content.component.scss']
})
export class HomeInformationContentComponent implements OnDestroy{

  @Input() informations: HomeInformation[];
  @HostBinding('class.border') borderVisible = false;

  private scrollPositionSubscriber;

  constructor( private scrollControllerService:ScrollController ) {
    this.scrollPositionSubscriber = this.scrollControllerService.getCurrentElementStream().subscribe(
      (value:any) => {
        if(value.id == 1)
          return this.borderVisible = false;
        this.borderVisible = true;
      }
    )
    this.scrollControllerService.resetElementQuantity();
  }

  ngOnDestroy(){
    this.scrollPositionSubscriber.unsubscribe();
  }

}
