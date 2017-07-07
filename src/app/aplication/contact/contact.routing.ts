import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact.component';
import {ContactResolver} from './services/contact.resolver';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../app.module";
import {Http} from "@angular/http";

const contactRoutes: Routes = [
    {path: '', component: ContactComponent, resolve: {company: ContactResolver}},
];


@NgModule({
    imports: [
        RouterModule.forChild(contactRoutes),
      TranslateModule.forChild({
        loader: {provide: TranslateLoader, useFactory: createTranslateLoader,  deps: [Http]},
        isolate: true
      })
    ],
    exports: [RouterModule]
})
export class ContactRoutingModule {

}
