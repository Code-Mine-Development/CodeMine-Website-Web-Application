import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuditListComponent} from './aduit-list.component';
import {Component} from '@angular/core';


const MockData = {
    'tasks': [
        {
            'name': 'Badanie kodu źródłowego pod kątem zgodności z standardami'
        },
        {
            'name': 'Ocena kodu pod kątem braku wykorzystania lub błędnego wykorzystania wzorców projektowych'
        },
        {
            'name': 'Sprawdzenie sposobu wykorzystania bibliotek zewnętrznych oraz dostarczanych przez firmy trzecie.'
        }
    ],
};

@Component({
    selector: 'app-fake-list-wrapper',
    template: `<app-list [listData]="listData.tasks" [title]="title"></app-list>`
})
class FakeWrapperListComponent {
    title = 'testTitle';
    listData = MockData;
}

describe('ListComponent', () => {
    let component: AuditListComponent;
    let fixture: ComponentFixture<FakeWrapperListComponent>;

    let fakeComponent: AuditListComponent;
    let fakeFixture: ComponentFixture<AuditListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FakeWrapperListComponent, AuditListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FakeWrapperListComponent);
        component = fixture.debugElement.children[0].componentInstance;

        fakeFixture = TestBed.createComponent(AuditListComponent);
        fakeComponent = fakeFixture.componentInstance;
        fakeComponent.title = component.title;
        fakeComponent.listData = component.listData;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should @Input title to be "testTitle"', () => {
        expect(component.title).toBe('testTitle')
    });

    it('should @Input dataList contain Mock from FakeWrapperListComponent', () => {
        expect(component.listData).toEqual(MockData.tasks)
    });
});
