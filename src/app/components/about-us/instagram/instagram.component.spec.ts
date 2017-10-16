import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {InstagramComponent} from './instagram.component';
import {InstagramPhotoComponent} from './instagram-photo.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../shared/shared.module';

describe('InstagramComponent', () => {
  let component: InstagramComponent;
  let fixture: ComponentFixture<InstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [ InstagramComponent, InstagramPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
