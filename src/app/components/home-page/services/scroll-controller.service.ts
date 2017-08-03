import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ScrollToService } from '../../../shared/services/scroll-to.service';
import { HomeInformationServices } from './home-information.service';

export interface Duration{
  start:number,
  end: number
}

@Injectable()
export class ScrollControllerService {

  private scrollingOpponent;
  private positionList:[Duration];
  private scrollDirectory:string;
  private currentSection:number;
  private $currentSection = new Subject();
  private moving = false;


  constructor( private scrollToService:ScrollToService, homeInformationService:HomeInformationServices) {
    let prevScrollTop = 0;
    homeInformationService.getScrollTopStream().subscribe(
      (scrollTop:number) => {
        this.checkScrollDirectory(scrollTop, prevScrollTop);
        this.checkSection(scrollTop);
        this.move();
        prevScrollTop = scrollTop;
      }
    );
  }

  setScrollPositions( positionList:[Duration] ){
    console.log(positionList);
    this.positionList = positionList;
  }

  setScrollingOppoenent( elem ){
    this.scrollingOpponent = elem;
  }

  getLastSection(){
    return this.positionList.length;
  }

  getCurrentSectionStream(){
    if(!this.currentSection)
      return this.$currentSection.asObservable();
    return this.$currentSection.startWith(this.getCurrentSection());
  }

  moveToSection(index:number){
    if(!this.scrollingOpponent)
      return;
    if(index < 1 && index > this.positionList.length || this.getCurrentSection() === index || this.moving)
      return;

    let targetPositon = this.positionList[index-1].start;

    this.moving = true;
    this.scrollToService.scroll(targetPositon,'top',this.scrollingOpponent, () => {this.moving = false});
  }

  moveToPrevSection(){
    if(!this.scrollingOpponent ||  this.getCurrentSection() == 1 || !this.getCurrentSection() || this.moving)
      return;

    let targetSectionIndex = this.currentSection-1,
        targetPosition = this.positionList[targetSectionIndex].start;

    this.moving = true;
    this.scrollToService.scroll(targetPosition,'top',this.scrollingOpponent, () => {this.moving = false});
  }

  moveToNextSection(){
    if(!this.scrollingOpponent || this.getCurrentSection() === this.getLastSection() || !this.getCurrentSection() || this.moving)
      return;

    let targetSectionIndex = this.currentSection+1,
      targetPosition = this.positionList[targetSectionIndex].start;
    console.log(targetSectionIndex);
    this.moving = true;
    this.scrollToService.scroll(targetPosition,'top',this.scrollingOpponent, () => {this.moving = false});
  }

  private getCurrentSection(){
    return this.currentSection >= 0 ? this.currentSection+1 : null;
  }

  private checkScrollDirectory(scrollTop, prevScrollTop){
    this.scrollDirectory = prevScrollTop < scrollTop ? "down" : "up";
  }

  private checkSection(scrollTop){
    let section = this.positionList.findIndex( (sectionPosition) => ((sectionPosition.start < scrollTop && sectionPosition.end > scrollTop)));

    if(section >= 0)
      this.currentSection = section;
    else
      this.currentSection = null;

    this.$currentSection.next(this.getCurrentSection());
  }

  private move(){
    if( !this.getCurrentSection() )
      return this.moveToSection(1);
    if(this.scrollDirectory == "up")
      this.moveToPrevSection();
    else
      this.moveToNextSection()
  }



}
