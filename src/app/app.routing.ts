import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app-guards/auth.guard';

import { AppNotFoundComponent } from './app-not-found/app-not-found.component';
import { AppRepositoryListComponent } from './app-repository-list/app-repository-list.component';
import { AppComponent } from './app.component';

const ROUTES: Routes = [
    {
        path: '',
        component: AppComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'login',
                component: AppComponent
            },
            {
                path: 'meus-repositorios',
                component: AppRepositoryListComponent,
                canActivate: [AuthGuard],
                canLoad: [AuthGuard]
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        component: AppNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
