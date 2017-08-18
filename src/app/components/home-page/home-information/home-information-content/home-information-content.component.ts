import {Component, OnDestroy, HostBinding, HostListener, OnInit} from '@angular/core';
import {ScrollController} from '../../services/scroll.controller';

@Component({
  selector: 'app-home-information-content',
  templateUrl: './home-information-content.component.html',
  styleUrls: ['./home-information-content.component.scss']
})
export class HomeInformationContentComponent implements OnDestroy, OnInit{

  @HostListener('window:resize', ['$event']) resize(event) {
    this.checkScreen();
  }


  @HostBinding('class.border') borderVisible = false;
  @HostBinding('class.vertical') vertical;

  private scrollPositionSubscriber;

  constructor( private scrollControllerService: ScrollController ) {
    this.scrollPositionSubscriber = this.scrollControllerService.getCurrentElementStream().subscribe(
      (value: any) => {
        if (value.id == 1)
          return this.borderVisible = false;
        this.borderVisible = true;
      }
    );
    this.scrollControllerService.resetElementQuantity();
  }

  ngOnInit(){
    this.checkScreen();
  }

  ngOnDestroy(){
    this.scrollPositionSubscriber.unsubscribe();
  }

  private checkScreen(){
    if (window.innerWidth > window.innerHeight)
      this.vertical = true;
    else
      this.vertical = false;
  }
}
