import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterComponent} from './footer.component';
import {TranslateModule} from '@ngx-translate/core';
import {Input, Directive} from '@angular/core';
import {SocialServiceComponent} from './social-service.component';
import {ContactService} from '../../aplication/contact/services/contact.service';
import {Observable} from 'rxjs';
import {MockCompany} from '../../shared/mocks/company.mock';

@Directive({
  selector: '[appScrollTo]'
})
class ScrollDirective {
  @Input() appScrollTo;
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [FooterComponent, ScrollDirective, SocialServiceComponent],
      providers: [
        { provide: ContactService, useValue: {
          getCompany: () => Observable.of(MockCompany)
        }}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
