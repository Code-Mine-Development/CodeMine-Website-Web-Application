import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailsHeaderComponent } from './header.component';
import {TranslateModule} from '@ngx-translate/core';

describe('HeaderComponent', () => {
  let component: PortfolioDetailsHeaderComponent;
  let fixture: ComponentFixture<PortfolioDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [ PortfolioDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
