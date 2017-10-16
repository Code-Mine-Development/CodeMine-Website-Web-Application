import {Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-audit-list',
  templateUrl: 'aduit-list.component.html',
  styleUrls: ['audit-list.component.scss'],

})
export class AuditListComponent {

  @Output('navigate') navigate = new EventEmitter();

  onNavigate() {
    this.navigate.emit();
  }

}


