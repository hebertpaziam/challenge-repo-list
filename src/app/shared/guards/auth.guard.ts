import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { GithubService } from '@app-services/github.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
    constructor(private githubService: GithubService) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.githubService.isLogged();
    }
    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.githubService.isLogged();
    }
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.githubService.isLogged();
    }
}
