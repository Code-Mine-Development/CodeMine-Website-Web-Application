import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  template: '<video src="../../../../assets/videos/timelapse-chorzowska-2.mp4" autoplay loop></video>',
  styles: [`
    video{
      width: 100%;
    }
  `]
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
