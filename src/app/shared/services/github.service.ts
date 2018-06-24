import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '@environment';

import { Repository } from '@app-models/repository.model';

import * as VanillaToasts from 'vanillatoasts';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    private token: string;
    private isSignedIn: boolean;
    public readonly signStatusObservable = new BehaviorSubject<boolean>(false);

    constructor(private router: Router, private http: HttpClient) {
        this.signStatusObservable.subscribe((status: boolean) => (this.isSignedIn = status));
        this.token = localStorage.getItem('token');
        this.signStatusObservable.next(this.token ? true : false);
    }

    getSignedStatus(): boolean {
        return this.isSignedIn;
    }

    getRepositoryList(): Observable<Array<Repository>> {
        return this.http.get<Array<Repository>>(`/api.github.com/user/repos?sort=created`, {
            headers: new HttpHeaders({
                Accept: 'application/json',
                Authorization: `Bearer ${this.token}`
            })
        });
    }

    signIn(code: string) {
        this.requestToken(code).subscribe(
            (data) => {
                this.token = data.access_token;
                localStorage.setItem('token', this.token);
                this.signStatusObservable.next(true);
                this.router.navigate(['meus-repositorios']);
            },
            () => {
                VanillaToasts.create({
                    title: 'Erro!',
                    text: `Não foi possivel acessar seu repositório, tente novamente mais tarde.`,
                    type: 'error',
                    timeout: 3500
                });
            }
        );
    }

    singOut() {
        localStorage.removeItem('token');
        this.signStatusObservable.next(false);
        this.router.navigate(['autenticacao']);
    }

    private requestToken(code: string): Observable<any> {
        return this.http.post(
            '/github.com/login/oauth/access_token',
            {
                client_id: environment.CLIENT_ID,
                client_secret: environment.CLIENT_SECRET,
                code: code
            },
            {
                headers: new HttpHeaders({ Accept: 'application/json' }),
                withCredentials: false
            }
        );
    }
}
