import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import {DeskComponent} from './desk.component';
import {MockCompany} from '../../../shared/mocks/company.mock';


@Component({
  selector: 'app-bg',
  template: 'test',
  styles: [`
    :host{
      display:block;
      width:1000px;
      height: 500px;
    }
  `]
})
class BackgroundMockComponent {
}

describe('DeskComponent', () => {
  let component: DeskComponent;
  let fixture: ComponentFixture<DeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [DeskComponent, BackgroundMockComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const background = TestBed.createComponent(BackgroundMockComponent);
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
