import {async, ComponentFixture, TestBed, tick, fakeAsync} from '@angular/core/testing';
import {Location} from '@angular/common';

import { HeaderComponent } from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {Component} from '@angular/core';

@Component ({
  selector: 'app-fake-contact',
  template: '<h1>Contact\'s routing works</h1>',
})
export class FakeContactComponent {}

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
      declarations: [ HeaderComponent, FakeContactComponent ],
      imports: [RouterTestingModule.withRoutes(routes)]
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
    expect(link.length).toBe(5)
  });

  it('should navigate to Contact Component', fakeAsync(() => {
    const link = nativeElement.querySelectorAll('header ul li');
    link[2].click();
    tick();
    expect(location.path()).toEqual('/contact');
  }));

  it('should get content of fakeComponent', fakeAsync(() => {
    const compiled = fakeFixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Contact\'s routing works');
  }));



});
