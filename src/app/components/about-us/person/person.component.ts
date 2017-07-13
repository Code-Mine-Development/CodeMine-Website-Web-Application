import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ClosePersonService} from "../../../shared/services/close-person.service";
import {Employees} from "../../../aplication/about-us/interfaces/employees.interface";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() ActivatedDeskId;
  @Input() person: Employees;
  constructor(private closePersonService:ClosePersonService) { }

  ngOnInit() {
    console.log(this.person[this.ActivatedDeskId])
  }
  closeButtonClicked(){
    this.closePersonService.triggerClose();
  }

  @HostListener('window:keydown', ['$event']) closePerson(event) {
    if (event.keyCode == 27)
      this.closePersonService.triggerClose();

  }
  }

