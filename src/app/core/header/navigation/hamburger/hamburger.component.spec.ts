import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HamburgerComponent} from './hamburger.component';
import {PipeTransform, Pipe} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../../shared/shared.module';


@Pipe({
  name: 'localize'
})
class LocalizePipeMock implements PipeTransform {
  transform(value: string) {
    return value;
  }
}


describe('HamburgerComponent', () => {
  let component: HamburgerComponent;
  let fixture: ComponentFixture<HamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [HamburgerComponent, LocalizePipeMock]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
