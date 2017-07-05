import {Router, Routes, } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {TestBed, inject, tick, fakeAsync} from '@angular/core/testing';

import {HttpModule} from '@angular/http';
import {Component} from '@angular/core';
import {HomeInformationResolver} from './home-information.resolver';
import {HomeInformationServices} from './home-information.service';
import {MockInformation} from '../../../shared/mocks/home-information.mock';


@Component ({
  selector: 'app-fake-home-information-resolver',
  template: '<p></p>',
})
class FakeResolveComponent {}


export const routes: Routes = [
  {path: 'resolver', component: FakeResolveComponent, resolve: {homeInformation: HomeInformationResolver}},
];

describe('HomeInformationResolver', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeResolveComponent],
      providers: [HomeInformationResolver, HomeInformationServices],
      imports: [RouterTestingModule.withRoutes(routes), HttpModule]
    })
  });

  it('it should called resolver service on routing change to "/resolver"',
    fakeAsync(inject([HomeInformationResolver, Router, HomeInformationServices], (resolve, router, homeInformationServices) => {
      spyOn(resolve, 'resolve').and.callThrough();

      homeInformationServices.getInformation = () => {
        return MockInformation;
      };
      router.navigate(['/resolver']);
      tick();
      expect(resolve['resolve']).toHaveBeenCalled();
    }))
  );

});

