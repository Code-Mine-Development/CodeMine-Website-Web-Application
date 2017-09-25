import {TestBed, ComponentFixture} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';

@Component({
    template: `<app-button [title]="'test'" [color]="'red'"></app-button>`
})
class FakeWrapperComponent {}

describe('ValidateOnBlurDirective', () => {

    let component: FakeWrapperComponent;
    let fixture: ComponentFixture<FakeWrapperComponent>;
    let element: DebugElement;
    const buttonClass = new ButtonComponent();

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FakeWrapperComponent, ButtonComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FakeWrapperComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.css('app-button'));
        fixture.detectChanges();
    });

    it('should change button background on hover to "#282828" and revert to red on mouseover', () => {
        element.triggerEventHandler('mouseenter', null);
        fixture.detectChanges();
        expect(element.styles.backgroundColor).toBe('#282828');

        element.triggerEventHandler('mouseleave', null);
        fixture.detectChanges();
        expect(element.styles.backgroundColor).toBe('red');
    });

});
