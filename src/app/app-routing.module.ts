import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {HomePageComponent} from './core/home-page/home-page.component';
import {ContactResolver} from './aplication/contact/services/contact.resolver';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {HomePageResolver} from "./core/home-page/services/home-page.resolver";

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent, resolve: {company: ContactResolver, carousel: HomePageResolver}},
    {path: 'contact', loadChildren: './aplication/contact/contact.module#ContactModule'},
    {path: 'audit', loadChildren: './aplication/audit/audit.module#AuditModule'},
    {path: 'portfolio', loadChildren: './aplication/portfolio/portfolio.module#PortfolioModule'},

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
