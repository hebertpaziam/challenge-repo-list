import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/share.module';

import { AppRoutingModule } from './app.routing';

import { AuthGuard } from '@app-guards/auth.guard';

import { GithubService } from '@app-services/github.service';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    declarations: [AppComponent, AuthenticationComponent, FooterComponent, NavbarComponent, NotFoundComponent, RepositoryListComponent, LoadingComponent],
    providers: [GithubService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
