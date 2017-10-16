import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Location} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';


describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;
    let location: Location;
    let nativeElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule, TranslateModule.forRoot()],
            declarations: [ PageNotFoundComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        nativeElement = fixture.debugElement.nativeElement;
        console.log(nativeElement);
        fixture.detectChanges();
        location = TestBed.get(Location);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
