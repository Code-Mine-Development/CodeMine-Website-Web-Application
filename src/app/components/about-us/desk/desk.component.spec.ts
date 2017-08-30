import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import { DeskComponent } from './desk.component';
import {MockCompany} from '../../../shared/mocks/company.mock';


@Component({
  selector: 'BG',
  template: 'test',
  styles: [`
    :host{
      display:block;
      width:1000px;
      height: 500px;
    }
  `]
})
class BackGround{}

describe('DeskComponent', () => {
  let component: DeskComponent;
  let fixture: ComponentFixture<DeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [ DeskComponent, BackGround ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const background = TestBed.createComponent(BackGround);
    fixture = TestBed.createComponent(DeskComponent);

    component = fixture.componentInstance;
    component.person = MockCompany.employees[0];
    component.activePerson = {};
    component.bg = background.nativeElement;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
