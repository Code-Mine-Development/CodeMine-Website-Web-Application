import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PortfolioDetailsHeaderComponent} from './header.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../../shared/shared.module';

describe('PortfolioHeaderComponent', () => {
  let component: PortfolioDetailsHeaderComponent;
  let fixture: ComponentFixture<PortfolioDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        SharedModule
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
