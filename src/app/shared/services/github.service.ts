import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { User } from '@app-models/user.model';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    private user: User = new User();
    private isSignedIn: boolean;

    public readonly signStatusObservable = new Subject<boolean>();

    constructor(private router: Router) {
        this.signStatusObservable.subscribe((status: boolean) => (this.isSignedIn = status));

        this.user.token = localStorage.getItem('token');

        this.signStatusObservable.next(this.user.token ? true : false);
    }

    getSignedStatus() {
        return this.isSignedIn;
    }

    signIn() {
        this.user.token = new Date().toJSON();

        localStorage.setItem('token', this.user.token);
        this.signStatusObservable.next(true);
        this.navToHome();
    }

    singOut() {
        localStorage.removeItem('token');
        this.signStatusObservable.next(false);
        this.router.navigate(['autenticacao']);
    }

    navToHome() {
        this.router.navigate(['meus-repositorios']);
    }
}
