import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FullSizeComponent} from './full-size.component';
import {Pipe, PipeTransform} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../../shared/shared.module';

@Pipe({
  name: 'localize'
})
class LocalizePipeMock implements PipeTransform {
  transform(value: string) {
    return value;
  }
}

describe('FullSizeComponent', () => {
  let component: FullSizeComponent;
  let fixture: ComponentFixture<FullSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [FullSizeComponent, LocalizePipeMock]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
