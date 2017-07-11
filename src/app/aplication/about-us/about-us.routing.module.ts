import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './about-us.component';
import {ContactResolver} from '../contact/services/contact.resolver';

const aboutUsRoutes: Routes = [
    {path: '', component: AboutUsComponent, resolve: {company: ContactResolver}},

];


@NgModule({
    imports: [
        RouterModule.forChild(aboutUsRoutes)
    ],
    exports: [RouterModule]
})
export class AboutUsRoutingModule {

}
