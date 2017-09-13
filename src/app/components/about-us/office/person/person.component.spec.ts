import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';
import {TranslateModule} from '@ngx-translate/core';
import {EventManager} from '../event_manager';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
        ],
      declarations: [ PersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    component.eventManager = new EventManager();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
