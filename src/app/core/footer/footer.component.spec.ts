import {Input, Directive} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
import {FooterComponent} from './footer.component';
import {SocialServiceComponent} from './social-service.component';
import {ContactService} from '../../aplication/contact/services/contact.service';
import {MockCompany} from '../../shared/mocks/company.mock';
import {CopyToClipboardService} from '../../shared/services/copy-to-clipboard.service';

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
        {
          provide: ContactService, useValue: {
            getCompany: () => Observable.of(MockCompany)
          }
        },
        {
          provide: CopyToClipboardService, useValue: {
            copy: (text) => true,
            detectMobile: () => true
          }
        }
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
