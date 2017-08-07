import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-we-work',
  template: `
     <article>
      <h1>{{'HOME.howWeWork.title' | translate}}</h1>
      <p>{{'HOME.howWeWork.description' | translate}}</p>
     </article>
  `,
  styles: [`
    :host{
      height: 85vh;
      width:100%;
      display:block;
    }
    article{
      width:55.3%;
      margin:auto;
      background: #F2F2F0;
      padding: 20px;
      /*transform: translateY(-50%)*/
    }
  `]
})
export class HowWeWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
