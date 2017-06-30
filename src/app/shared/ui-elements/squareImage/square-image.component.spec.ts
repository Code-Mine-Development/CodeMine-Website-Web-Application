import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {SquareImageComponent} from './square-image.component';


@Component({
  selector: 'app-fake-wrapper',
  template: `<app-square-image [image]="image" [width]="width"></app-square-image>`
})
class FakeWrapperComponent {
  image = 'https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg';
  width = 5.44;
}

describe('CarouselComponent', () => {
  let component: SquareImageComponent;
  let fixture: ComponentFixture<FakeWrapperComponent>;

  let fakeComponent: SquareImageComponent;
  let fakeFixture: ComponentFixture<SquareImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FakeWrapperComponent, SquareImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeWrapperComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fakeFixture = TestBed.createComponent(SquareImageComponent);
    fakeComponent = fakeFixture.componentInstance;
    fakeComponent.image = component.image;
    fakeComponent.width = component.width;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should @Input image to be a sting', () => {
    expect(component.image).toBe('https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpeg')
  });

  it('should @Input width to be 5.44', () => {
    expect(component.width).toBe(5.44)
  });


});
