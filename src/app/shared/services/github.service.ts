import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environment';

import { Repository } from '@app-models/repository.model';
import { User } from '@app-models/user.model';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    public user: User = new User();
    private isSignedIn: boolean;

    public readonly signStatusObservable = new Subject<boolean>();

    constructor(private router: Router, private http: Http) {
        this.signStatusObservable.subscribe((status: boolean) => (this.isSignedIn = status));

        this.user.token = localStorage.getItem('token');

        this.signStatusObservable.next(this.user.token ? true : false);
    }

    getSignedStatus() {
        return this.isSignedIn;
    }

    getRepositoryList(): Observable<Array<Repository>> {
        return this.http
            .get(`${environment.API_GITHUB}/users/hebertpazian/repos`, this.getHeaders())
            .pipe(map((res) => res.json()));
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

    private getHeaders(): RequestOptions {
        const headers: Headers = new Headers();
        // headers.set('Authorization', `Bearer ${this.user.token}`);
        return new RequestOptions({ headers: headers });
    }
}
