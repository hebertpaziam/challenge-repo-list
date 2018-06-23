import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { GithubService } from '@app-services/github.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
    constructor(private githubService: GithubService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const status = this.githubService.getSignedStatus();
        if (status === false) {
            this.router.navigate(['autenticacao']);
        } else {
            return status;
        }
    }
    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const status = this.githubService.getSignedStatus();
        if (status === false) {
            this.router.navigate(['autenticacao']);
        } else {
            return status;
        }
    }
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        const status = this.githubService.getSignedStatus();
        if (status === false) {
            this.router.navigate(['autenticacao']);
        } else {
            return status;
        }
    }
}
