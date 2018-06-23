import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/share.module';

import { AppRoutingModule } from './app.routing';

import { GithubService } from '@app-services/github.service';

import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';
import { AppRepositoryListComponent } from './app-repository-list/app-repository-list.component';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        AppFooterComponent,
        AppLoginComponent,
        AppNavbarComponent,
        AppNotFoundComponent,
        AppRepositoryListComponent
    ],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [GithubService],
    bootstrap: [AppComponent]
})
export class AppModule {}
