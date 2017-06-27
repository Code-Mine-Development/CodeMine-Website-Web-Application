import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactInfoComponent } from './contact-info.component';
import {ContactComponent} from '../../contact/contact.component';

const MockCompany = [{
  'country': 'Poland',
  'city': 'Katowice',
  'street': '3 maja',
  'apartment': '18/3',
  'email': 'office@code-mine.com',
  'phone': '+48 723 21 67'
}];


describe('ContactInfoComponent', () => {
  let component: ContactInfoComponent;
  let fixture: ComponentFixture<ContactInfoComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent, ContactInfoComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoComponent);
    component = fixture.componentInstance;
    component.company = MockCompany;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
