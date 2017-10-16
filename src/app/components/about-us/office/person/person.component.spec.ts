import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PersonComponent} from './person.component';
import {TranslateModule} from '@ngx-translate/core';
import {EventManager} from '../../../../shared/services/event_manager';
import {ScrollToService} from '../../../../shared/services/scroll-to.service';
import {SharedModule} from '../../../../shared/shared.module';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [PersonComponent],
      providers: [
        ScrollToService
      ]
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
