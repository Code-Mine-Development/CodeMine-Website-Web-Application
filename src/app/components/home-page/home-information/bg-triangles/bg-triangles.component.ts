import { Component, OnInit } from '@angular/core';
import {Point} from '../../../../shared/interface/point.interface';

interface Triangle{
  position: Point,
  range: number,
  size: number,
  color: string
}

enum size{
  small = 1,
  big
}

@Component({
  selector: 'app-bg-triangles',
  templateUrl: './bg-triangles.component.html',
  styleUrls: ['./bg-triangles.component.scss']
})
export class BgTrianglesComponent implements OnInit {

  triangles: Array<Triangle> = new Array();

  constructor() { }

  ngOnInit() {
    this.triangleGenerator(8);
  }

  triangleGenerator( count: number ){
    while (this.triangles.length < count){
      let triangle: Triangle = <Triangle>{},
        random: number = +(Math.random() * 50).toFixed(0),
        section = Math.floor(this.triangles.length / (count / 4)),
        additionalX = (section == 1 || section == 3) ? 50 : 0,
        additionalY = (section == 2 || section == 3) ? 50 : 0;

      triangle.position = { x: additionalX + random, y: 0 }
      random = +(Math.random() * 50).toFixed(0);
      triangle.position.y = additionalY + random;

      this.parsePosition( triangle );
      random = +Math.random().toFixed(0);
      triangle.size =  random == 1 ? size.big : size.small;

      random = +(Math.random() * 5).toFixed(0);
      triangle.range = triangle.size == size.big ? 10 + random : 5 + random;

      random = +Math.random().toFixed(0);

      triangle.color = random == 1 ? '#ffdf00' : '#000000';
      this.triangles.push(triangle);
    }
  }

  parsePosition(triangle: Triangle){
    if ( triangle.position.x > 30 && triangle.position.x < 70 )
      triangle.position.x  = triangle.position.x > 50 ? triangle.position.x + 20 : triangle.position.x - 20;

    if ( triangle.position.y > 40 && triangle.position.x < 60 )
      triangle.position.y  = triangle.position.y > 50 ? triangle.position.y + 10 : triangle.position.y - 10;

    if ( triangle.position.x < 10 || triangle.position.x > 90)
      triangle.position.x  = triangle.position.x > 90 ? triangle.position.x - 10 : triangle.position.x + 10;

    if ( triangle.position.y < 10 || triangle.position.y > 90)
      triangle.position.y  = triangle.position.y > 90 ? triangle.position.y - 10 : triangle.position.y + 10;
  }
}
