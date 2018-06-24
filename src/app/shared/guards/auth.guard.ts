import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { GithubService } from '@app-services/github.service';

import * as VanillaToasts from 'vanillatoasts';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private githubService: GithubService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const status = this.githubService.getSignedStatus();
        if (status === false) {
            setTimeout(
                () =>
                    VanillaToasts.create({
                        title: 'Atenção!',
                        text: `Para acessar "${next.routeConfig.path}" é necessário autenticação.`,
                        type: 'warning',
                        timeout: 3500
                    }),
                1000
            );
            this.router.navigate(['autenticacao']);
        } else {
            return status;
        }
    }
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.githubService.getSignedStatus();
    }
}
