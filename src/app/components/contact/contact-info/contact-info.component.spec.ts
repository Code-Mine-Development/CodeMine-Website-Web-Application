import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ContactInfoComponent} from './contact-info.component';
import {Component} from '@angular/core';
import {MockCompany} from '../../../shared/mocks/company.mock';
import {TranslateModule} from '@ngx-translate/core';
import {CopyToClipboardService} from '../../../shared/services/copy-to-clipboard.service';
import {SharedModule} from '../../../shared/shared.module';

@Component({
  selector: 'app-fake-contact-info-wrapper',
  template: `<app-contact-info [company]="company"></app-contact-info>`
})
class FakeWrapperContactInfoComponent {
  company = MockCompany;
}

describe('ContactInfoComponent', () => {
  let component: ContactInfoComponent;
  let fixture: ComponentFixture<FakeWrapperContactInfoComponent>;

  let fakeComponent: ContactInfoComponent;
  let fakeFixture: ComponentFixture<ContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [ FakeWrapperContactInfoComponent, ContactInfoComponent],
      providers: [
        {provide: CopyToClipboardService, useValue: {
          copy: (text) => true,
          detectMobile: () => true
        }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeWrapperContactInfoComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fakeFixture = TestBed.createComponent(ContactInfoComponent);
    fakeComponent = fakeFixture.componentInstance;
    fakeComponent.company = component.company;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should @Input company to be equal MockCompany', () => {
    expect(component.company).toEqual(MockCompany)
  });

});
