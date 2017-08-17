import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrighterVisionGrowthPlatformComponent } from './brighter-vision-growth-platform.component';

describe('BrighterVisionGrowthPlatformComponent', () => {
  let component: BrighterVisionGrowthPlatformComponent;
  let fixture: ComponentFixture<BrighterVisionGrowthPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrighterVisionGrowthPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrighterVisionGrowthPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
