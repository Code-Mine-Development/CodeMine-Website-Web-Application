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
      display:flex;
    }
    article{
      width:50%;
      margin:auto;
      background: #f2f2f2;
      box-sizing: border-box;
      text-align: center;
      padding:60px 60px;
      box-shadow: 10px 20px 50px RGBA(161,161,161,0.35);
    }
    h1{
      margin:0 0 20px;
      font-size:4.8rem;
    }
    p{
      font-weight: 700;
      font-size: 2.4rem;
      word-break: normal;
      margin:0;
    }
  `]
})
export class HowWeWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
