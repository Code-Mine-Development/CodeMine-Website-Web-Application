import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProjectPreviewComponent} from './project-preview.component';
import {TranslateModule} from '@ngx-translate/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CopyToClipboardService} from '../../../../../shared/services/copy-to-clipboard.service';
import {MockPortfolio} from '../../../../../shared/mocks/portfolio.mock';

describe('ProjectPreviewComponent', () => {
  let component: ProjectPreviewComponent;
  let fixture: ComponentFixture<ProjectPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPreviewComponent ],
      imports: [
        TranslateModule.forRoot(),
        NoopAnimationsModule
      ],
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
    fixture = TestBed.createComponent(ProjectPreviewComponent);
    component = fixture.componentInstance;
    component.open = 0;
    component.index = 0;
    component.project = MockPortfolio[0];
    component.direction = 'next';
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
