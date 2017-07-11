import {Component, HostListener, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss'],
  animations: [
    trigger('door', [
      state('close', style({
        'transform': 'rotateY(0deg)'
      })),
      state('open', style({
        'transform': 'rotateY(149deg)'
      })),

      transition('close <=> open', animate(800)),
    ])
  ]
})
export class DoorComponent implements OnInit {
  state = 'close';
  constructor() { }

  ngOnInit() {
  }

  openDoor() {
    this.state === 'close' ? this.state = 'open' : this.state = 'close';
  }

}
