import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact.component';
import {ContactResolver} from './services/contact.resolver';

const contactRoutes: Routes = [
    {path: '', component: ContactComponent, resolve: {company: ContactResolver}},
];


@NgModule({
    imports: [
        RouterModule.forChild(contactRoutes)
    ],
    exports: [RouterModule]
})
export class ContactRoutingModule {

}
