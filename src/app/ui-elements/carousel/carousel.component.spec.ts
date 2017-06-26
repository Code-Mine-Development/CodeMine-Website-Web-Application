import {async, ComponentFixture, TestBed, tick, fakeAsync, discardPeriodicTasks} from '@angular/core/testing';
import { CarouselComponent } from './carousel.component';
import {Observable} from "rxjs";

const MockCarouselData = [
  {
    "title":"carousel item 1",
    "description": "Super Description1",
    "mainImage":"http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg",
    "thumbnail": "http://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg",
    "tags":{
      "products":["prod1","prod2","prod3"],
      "technology":["tech1","tech2","tech3"],
      "languages":["lang1","lang1","lang1"]
    },
    "technologies":[
      {
        "title":"Technology1",
        "description":"Description1",
        "thumbnail":"https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif",
        "mainImage":"https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif"
      },
      {
        "title":"Technology2",
        "description":"Description2",
        "thumbnail":"https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif",
        "mainImage":"https://a0.awsstatic.com/main/images/logos/aws_logo_179x109.gif"
      }
    ],
    "homePage":true
  },
  {
    "title":"carousel item 2",
    "description": "Super Description2",
    "mainImage":"https://steamuserimages-a.akamaihd.net/ugc/25087975291817161/4B01A1274CA990A3577CC37E1DAA72F88DE353F8/",
    "thumbnail": "https://steamuserimages-a.akamaihd.net/ugc/25087975291817161/4B01A1274CA990A3577CC37E1DAA72F88DE353F8/",
    "tags":{
      "products":["prod1","prod2","prod3"],
      "technology":["tech1","tech2","tech3"],
      "languages":["lang1","lang1","lang1"]
    },
    "technologies":[
      {
        "title":"Technology1",
        "description":"Description1",
        "thumbnail":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        "mainImage":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
      },
      {
        "title":"Technology2",
        "description":"Description2",
        "thumbnail":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        "mainImage":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
      }
    ],
    "homePage":true
  },
];

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let originalTimeout;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.data = MockCarouselData;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  function observableDelay(value: any, delayMs: number) {
    return Observable.interval(delayMs).take(1).map(() => value);
  }


  it('should set interval',(done) => {
    fixture.whenStable().then(() => {
      observableDelay(component.data,100).subscribe((response)=>{
        console.log(response);
      });
      done();
    });
  });

});
