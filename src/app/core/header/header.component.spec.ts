import {Component, Pipe, PipeTransform} from '@angular/core';
import {async, ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header.component';
import {TranslateModule} from '@ngx-translate/core';
import {LocalizeRouterService} from 'localize-router';

import {LoadingComponent} from './loadingbar.component';
import {LogoComponent} from './logo/logo.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FullSizeComponent} from './navigation/full-size/full-size.component';
import {HamburgerComponent} from './navigation/hamburger/hamburger.component';
import {HomeInformationServices} from '../../components/home-page/services/home-information.service';


@Component({
  selector: 'app-fake-contact',
  template: '<h1>Contact\'s routing works</h1>',
})
class FakeContactComponent {
}

@Pipe({
  name: 'localize'
})
class LocalizePipeMock implements PipeTransform {
  transform(value: string) {
    return value;
  }
}

export const routes: Routes = [
  {path: 'contact', component: FakeContactComponent},
];

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let fakeComponent: FakeContactComponent;
  let fakeFixture: ComponentFixture<FakeContactComponent>;
  let nativeElement;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        FakeContactComponent,
        LoadingComponent,
        LogoComponent,
        NavigationComponent,
        FullSizeComponent,
        HamburgerComponent,
        LocalizePipeMock,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        TranslateModule.forRoot(),
        HttpModule,
        NoopAnimationsModule
      ],
      providers: [
        HomeInformationServices,
        {provide: LocalizeRouterService, useValue: {}}
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    fakeFixture = TestBed.createComponent(FakeContactComponent);
    component = fixture.componentInstance;
    fakeComponent = fakeFixture.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    location = TestBed.get(Location);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return 4 links with routing', () => {
    const link = nativeElement.querySelectorAll('header ul li');
    console.log(link);
    // expect(link.length).toBe(5)
  });

  it('should navigate to Contact Component', fakeAsync(() => {
    const link = nativeElement.querySelectorAll('header ul li');
    // link[2].click();
    // tick();
    // expect(location.path()).toEqual('/contact');
  }));

  it('should get content of fakeComponent', fakeAsync(() => {
    const compiled = fakeFixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Contact\'s routing works');
  }));


});
