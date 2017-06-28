import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'aduit-list.component.html',
  styleUrls: ['audit-list.component.scss']
})
export class AuditListComponent {
  @Input() listData;
  @Input() title: string;
}
