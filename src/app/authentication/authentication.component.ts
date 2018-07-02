import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { environment } from '@environment';

import { GithubService } from '@app-services/github.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
    constructor(private githubService: GithubService, private router: Router, private title: Title) {}

    ngOnInit() {
        if (this.githubService.getSignedStatus() === true) {
            this.router.navigate(['meus-repositorios']);
        } else {
            this.title.setTitle('GithubRepositoryList - Autenticação');
        }
    }

    requestCode() {
        location.href = `https://github.com/login/oauth/authorize?client_id=${
            environment.CLIENT_ID
        }&scope=public_repo&redirect_uri=${location.protocol}//${location.host}/carregando-sessao`;
    }
}
