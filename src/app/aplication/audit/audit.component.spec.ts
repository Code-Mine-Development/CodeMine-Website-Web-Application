import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Directive, Input} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

import {AuditComponent} from './audit.component';
import {AuditDetailsComponent} from '../../components/audit/audit-details/audit-details.component';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {MockAudit} from '../../shared/mocks/audit.mock';
import {AuditListComponent} from '../../components/audit/audit-list/aduit-list.component';

import {AuditListElementComponent} from '../../components/audit/audit-list/audit-list-element.component';
import {DrawBackgroundService} from '../../shared/services/draw-background.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@Directive({
  selector: '[appScrollTo]'
})
class ScrollDirective {
  @Input() appScrollTo;
}


describe('AuditComponent', () => {
  let component: AuditComponent;
  let fixture: ComponentFixture<AuditComponent>;
  let nativeElement;

  const DrawBackgroundServiceMock = {
    AuditBackground: jasmine.createSpy('AuditBackground'),
    AuditDetailsBackground: () => {
    }
  }, router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        NoopAnimationsModule
      ],
      declarations: [AuditComponent, AuditDetailsComponent, AuditListComponent, AuditListElementComponent, ScrollDirective],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: {
              subscribe: (fn: (value: Data) => void) => fn({
                audit: MockAudit,
              })
            }
          }
        },
        {provide: Router, useValue: router},
        {provide: DrawBackgroundService, useValue: DrawBackgroundServiceMock}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return the same length of DOM element to MockAudit', () => {
    const link = nativeElement.querySelectorAll('app-audit-details');
    expect(link.length).toBe(MockAudit.length);
  });

  it('should draw background triangle', () => {
    expect(DrawBackgroundServiceMock.AuditBackground).toHaveBeenCalled();
  });


  it('should redraw background', () => {
    DrawBackgroundServiceMock.AuditBackground.calls.reset();
    window.dispatchEvent(new Event('resize'));
    expect(DrawBackgroundServiceMock.AuditBackground).toHaveBeenCalled();
    window.dispatchEvent(new Event('resize'));
    expect(DrawBackgroundServiceMock.AuditBackground).toHaveBeenCalledTimes(2);
  })

});
