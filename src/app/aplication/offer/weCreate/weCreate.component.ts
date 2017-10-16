import {Component, Input} from '@angular/core';
import {WeCreate} from '../../../shared/interface/we-create.interface';


@Component({
  selector: 'app-we-create',
  templateUrl: './weCreate.component.html',
  styleUrls: ['./weCreate.component.scss']
})
export class WeCreateComponent {
  @Input() WeCreate: WeCreate;

  detectMobile(){
    return  window.innerWidth < 577;
  }
}
