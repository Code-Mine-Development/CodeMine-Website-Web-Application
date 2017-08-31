import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchitectureComponent } from './architecture.component';
import {OfferThumbnailsComponent} from '../../../../shared/ui-elements/offer-thumbnails/offer-thumbnails.component';
import {MockTechnologies} from '../../../../shared/mocks/technologies.mock';
import {MockTools} from '../../../../shared/mocks/tools.mock';

describe('ArchitectureComponent', () => {
  let component: ArchitectureComponent;
  let fixture: ComponentFixture<ArchitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectureComponent, OfferThumbnailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectureComponent);
    component = fixture.componentInstance;
    component.technologies = MockTechnologies;
    component.tools = MockTools;
    component.currentTechnologies = [];
    component.currentTools = [];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
