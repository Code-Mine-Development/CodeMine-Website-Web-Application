import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarInfoComponent } from './star-info.component';
import {TranslateModule} from '@ngx-translate/core';

describe('StarInfoComponent', () => {
  let component: StarInfoComponent;
  let fixture: ComponentFixture<StarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [ StarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
