import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeModelComponent } from './office-model.component';
import {DeskComponent} from './desk/desk.component';
import {DoorComponent} from '../../door/door.component';
import {PersonComponent} from '../../person/person.component';
import {TranslateModule} from '@ngx-translate/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('OfficeModelComponent', () => {
  let component: OfficeModelComponent;
  let fixture: ComponentFixture<OfficeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        NoopAnimationsModule
      ],
      declarations: [ OfficeModelComponent, DeskComponent, DoorComponent, PersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
