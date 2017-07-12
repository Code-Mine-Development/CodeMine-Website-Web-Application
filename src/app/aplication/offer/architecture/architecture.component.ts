import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {

  @Input() Architecture;
  constructor() { }

  ngOnInit() {
  }

}
