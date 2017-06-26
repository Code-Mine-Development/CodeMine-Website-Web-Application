import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {OfferComponent} from './offer/offer.component';
import {HomePageComponent} from "./core/home-page/home-page.component";
import {ContactResolver} from "./contact/contact.resolver";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomePageResolver} from "./core/home-page/home-page.resolver";

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent, resolve: {company: ContactResolver, carousel: HomePageResolver}},
    {path: 'offer', component: OfferComponent},
    {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
    {path: 'audit', loadChildren: './audit/audit.module#AuditModule'},

    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
