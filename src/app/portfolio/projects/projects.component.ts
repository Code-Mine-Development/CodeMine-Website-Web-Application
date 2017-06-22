import { Component, OnInit } from '@angular/core';
import {Project} from "./project/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    new Project(
      'Project 1',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa cum cumque eaque est ex inventore labore libero',
      'http://www.pngall.com/wp-content/uploads/2016/07/Web-Design-PNG-Image.png',
      'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png',
      ['tag1', 'tag3','tag4', 'tag'],
      ['https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
       'https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
        'https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
        'https://angular.io/assets/images/logos/angular/angular.png',]
    ),
    new Project(
      'Project 2',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa cum cumque eaque est ex inventore labore libero',
      'http://www.pngall.com/wp-content/uploads/2016/07/Web-Design-PNG-Image.png',
      'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png',
      ['tag', 'tag1','tag3', 'tag10'],
      ['https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
        'https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
        'https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',]
    ),
    new Project(
      'Project 3',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa cum cumque eaque est ex inventore labore libero',
      'http://www.pngall.com/wp-content/uploads/2016/07/Web-Design-PNG-Image.png',
      'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png',
      ['tag1', 'tag5','tag2', 'tag8'],
      ['https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
        'https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
       ]
    ),
    new Project(
      'Project 1',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa cum cumque eaque est ex inventore labore libero',
      'http://www.pngall.com/wp-content/uploads/2016/07/Web-Design-PNG-Image.png',
      'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png',
      ['tag1', 'tag3','tag4', 'tag'],
      ['https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
        'https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
        'https://angular.io/assets/images/logos/angular/angular.png','https://angular.io/assets/images/logos/angular/angular.png',
        'https://angular.io/assets/images/logos/angular/angular.png',]
    ),
    ];

  constructor() { }

  ngOnInit() {

  }

}
