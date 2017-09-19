import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestComponent} from './test.component';
import {TestRoutingModule} from './test.routing';
import { DynamicFrameComponent } from './dynamic-frame/dynamic-frame.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [TestComponent, DynamicFrameComponent]
})
export class TestModule {
}
