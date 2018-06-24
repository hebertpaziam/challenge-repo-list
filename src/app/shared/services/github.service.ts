import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

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

    getRepositoryList(): Promise<Array<Repository>> {
        return this.http
            .get(`${environment.API_GITHUB}/users/hebertpazian/repos`, this.getHeaders())
            .toPromise()
            .then((response: Response) => this.extractData(response))
            .catch((error: Error) => this.handleError(error));
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

    private extractData(response: Response): any {
        if (response.json() && response.json()) {
            return Promise.resolve(response.json());
        } else if (response.json()) {
            return Promise.resolve(response.json());
        } else {
            return Promise.resolve(response.json());
        }
    }
    private handleError(error): Promise<any> {
        if (error.status === 401) {
            this.singOut();
        }
        return Promise.reject(error.message || error);
    }
    private getHeaders(): RequestOptions {
        const headers: Headers = new Headers();
        // headers.set('Authorization', `Bearer ${this.user.token}`);
        return new RequestOptions({ headers: headers });
    }
}
