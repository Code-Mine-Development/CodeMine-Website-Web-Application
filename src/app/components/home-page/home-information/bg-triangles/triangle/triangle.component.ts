import {Component, HostBinding, Input, OnChanges, HostListener, OnInit, AfterViewInit} from '@angular/core';
import {Point} from '../../../../../shared/interface/point.interface';
import {HomeInformationServices} from '../../../services/home-information.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit, OnChanges, AfterViewInit {

  @HostBinding("style.opacity") opacity = 1;
  @HostBinding("style.top") positionY;
  @HostBinding("style.left") positionX;
  @HostBinding("style.transform") transform;
  @HostBinding("style.z-index") zindex;

  @HostListener("window:mousemove", ['$event']) mouseMove(event){
    this.followMouse(event.x, event.y)
  }


  @Input("position") position:Point;
  @Input("size") size:number;
  @Input("range") range:number;
  @Input("color") color:string;

  private maxPositionDistance = 100;
  private maxTransformDistance = 70;
  private hidePoint = 200;
  private randomMovingInterval;
  private calculatedScale = .6;

  constructor( private scrollService: HomeInformationServices) { }

  ngOnChanges(){
    this.setPosition();
    this.calculateScale();
  }

  ngOnInit() {
    this.zindex = this.size == 1 ? 5 : 4;
    this.scrollService.getScrollTopStream().subscribe(
      (scrollTop:number) => {
        this.scrollHideAnimation(scrollTop);
      }
    )
  }

  ngAfterViewInit(){
    this.randomMoving();
  }

  followMouse( x, y ){
    let positionX = 100 - x/window.innerWidth * 100,
        positionY = 100 - y/window.innerHeight * 100,
        halfRange = this.range/2,
        distanceX = positionX - this.position.x,
        distanceY = positionY - this.position.y,
        resultFactorX = distanceX/this.maxPositionDistance,
        resultFactorY = distanceY/this.maxPositionDistance,
        outputDistanceX = halfRange * resultFactorX,
        outputDistanceY = halfRange * resultFactorY

    if(Math.abs(resultFactorX) > 1)
      outputDistanceX = resultFactorX < 0 ? -halfRange : halfRange;

    if(Math.abs(resultFactorY) > 1)
      outputDistanceY = resultFactorY < 0 ? -halfRange : halfRange;


    this.setPosition(this.position.x + outputDistanceX, this.position.y + outputDistanceY)
  }

  randomMoving(){
    this.randomMovingInterval = setInterval( () => {
      let xFactor = 1 - Math.random(),
          yFactor = 1 - Math.random();

      this.setTranslate(xFactor * this.maxTransformDistance, yFactor * this.maxTransformDistance);
    }, 2000)
  }

  scrollHideAnimation(scrollTop:number){
    let windowHeight = window.innerHeight,
        elementPosition = (parseInt(this.positionY)/100 * windowHeight),
        elementDistanceToBottom = windowHeight - elementPosition < 0 ? 0 : windowHeight - elementPosition,
        animationDistance = elementDistanceToBottom < this.hidePoint ? elementDistanceToBottom : this.hidePoint,
        animationFactor = scrollTop > (elementDistanceToBottom - animationDistance) ? (scrollTop - (elementDistanceToBottom - animationDistance)) / animationDistance : 0;

    if(animationFactor > 1) animationFactor = 1;

    this.opacity = 1 - animationFactor;
    this.calculateScale( 1 - animationFactor);

  }


  setPosition(x?:number, y?:number){
    this.positionX = (x || this.position.x) + "%";
    this.positionY = (y || this.position.y) + "%";
  }

  setTranslate( x?:number, y?:number ){
    this.transform = "translate("+ (x || 0) +"%,"+ (y || 0) +"%)";
  }

  calculateScale(factor:number = 1){
    this.calculatedScale = factor * (.6+this.size/2);
  }

}
