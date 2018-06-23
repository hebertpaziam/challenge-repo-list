import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app-guards/auth.guard';

import { AuthenticationComponent } from './authentication/authentication.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';

const ROUTES: Routes = [
    {
        path: 'autenticacao',
        component: AuthenticationComponent
    },
    {
        path: 'meus-repositorios',
        component: RepositoryListComponent,
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'autenticacao',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
