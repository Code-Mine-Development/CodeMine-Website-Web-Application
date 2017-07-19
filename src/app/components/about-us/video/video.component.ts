import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  template: '<video src="../../../../assets/videos/timelapse-chorzowska-2.mp4" autoplay loop></video>',
  styles: [`video{
    width: 100%; 
    height: 100vh}`
  ]
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
