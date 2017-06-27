import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {Location} from '@angular/common';

import {PageNotFoundComponent} from './page-not-found.component';
import {Component} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';

@Component({
    selector: 'app-fake-page-not-found',
    template: '<button class="fakeButton" routerLink="/wrong"></button>',
})
class FakeWrongComponent {}

export const routes: Routes = [
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
];

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;
    let fakeComponent: FakeWrongComponent;
    let fakeFixture: ComponentFixture<FakeWrongComponent>;
    let location: Location;
    let nativeElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [FakeWrongComponent, PageNotFoundComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fakeFixture = TestBed.createComponent(FakeWrongComponent);
        fakeComponent = fixture.componentInstance;
        nativeElement = fakeFixture.debugElement.nativeElement;
        fixture.detectChanges();
        location = TestBed.get(Location);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('page url should contain "page-not-found"', fakeAsync(() => {
        nativeElement.querySelector('button').click();
        tick();
        expect(location.path()).toEqual('/not-found');
    }));
});
