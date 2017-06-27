import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import {Observable} from 'rxjs/Observable';
import {Component} from '@angular/core';

const MockCarouselData = [
  {
    'title': 'carousel item 1',
    'description': 'Super Description1',
    'mainImage': 'http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg',
    'thumbnail': 'http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg',
    'tags': {
      'products': ['prod1', 'prod2', 'prod3'],
      'technology': ['tech1', 'tech2', 'tech3'],
      'languages': ['lang1', 'lang1', 'lang1']
    },
    'technologies': [
      {
        'title': 'Technology1',
        'description': 'Description1',
        'thumbnail': 'https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif',
        'mainImage': 'https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif'
      },
      {
        'title': 'Technology2',
        'description': 'Description2',
        'thumbnail': 'https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif',
        'mainImage': 'https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif'
      }
    ],
    'homePage': true
  },
  {
    'title': 'carousel item 2',
    'description': 'Super Description2',
    'mainImage': 'https://steamuserimages-a.akamaihd.net/ugc/25087975291817161/4B01A1274CA990A3577CC37E1DAA72F88DE353F8/',
    'thumbnail': 'https://steamuserimages-a.akamaihd.net/ugc/25087975291817161/4B01A1274CA990A3577CC37E1DAA72F88DE353F8/',
    'tags': {
      'products': ['prod1', 'prod2', 'prod3'],
      'technology': ['tech1', 'tech2', 'tech3'],
      'languages': ['lang1', 'lang1', 'lang1']
    },
    'technologies': [
      {
        'title': 'Technology1',
        'description': 'Description1',
        'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
        'mainImage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
      },
      {
        'title': 'Technology2',
        'description': 'Description2',
        'thumbnail': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
        'mainImage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
      }
    ],
    'homePage': true
  },
];

@Component({
  selector: 'app-fake-carousel-wrapper',
  template: `<app-carousel [data]="data" [timeout]="timeout" [transition]="transition"></app-carousel>`
})
class FakeWrapperCarouselComponent {
  data = MockCarouselData;
  timeout = 5000;
  transition = 1500;
}

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<FakeWrapperCarouselComponent>;

  let fakeComponent: CarouselComponent;
  let fakeFixture: ComponentFixture<CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FakeWrapperCarouselComponent, CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeWrapperCarouselComponent);
    component = fixture.debugElement.children[0].componentInstance;

    fakeFixture = TestBed.createComponent(CarouselComponent);
    fakeComponent = fakeFixture.componentInstance;
    fakeComponent.data = component.data;
    fakeComponent.timeout = component.timeout;
    fakeComponent.transition = component.transition;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should @Input timeout to be 5000', () => {
    expect(component.timeout).toBe(5000)
  });

  it('should @Input transition to be 1500', () => {
    expect(component.transition).toBe(1500)
  });

  it('should @Input data contain Mock from FakeWrapperCarouselComponent', () => {
    expect(component.data).toEqual(MockCarouselData)
  });


  function observableDelay(value: any, delayMs: number) {
    return Observable.interval(delayMs).take(1).map(() => value);
  }


  // it('should set interval',fakeAsync(() => {
  //   // spyOn(component, 'setInterval').and.callThrough();
  //   // component.animateCarousel();
  //   // let promise = new Promise((resolve) => {
  //   //   setTimeout(resolve, 5500)
  //   // });
  //   // promise.then(() => console.log(component.data));
  //   // tick(5500);
  //   // console.log(component.data);
  //   // fixture.whenStable().then(() => {
  //   //   observableDelay(component.data,100).subscribe((response)=>{
  //   //     console.log(response);
  //   //   });
  //   //   done();
  //   // });
  // }));

});
