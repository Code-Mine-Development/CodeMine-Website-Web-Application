import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvappsComponent } from './tvapps.component';

describe('TvappsComponent', () => {
  let component: TvappsComponent;
  let fixture: ComponentFixture<TvappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
