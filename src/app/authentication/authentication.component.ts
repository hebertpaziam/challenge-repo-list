import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { GithubService } from '@app-services/github.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
    constructor(private githubService: GithubService, private title: Title) {}

    ngOnInit() {
        if (this.githubService.getSignedStatus()) {
            this.githubService.navToHome();
        } else {
            this.title.setTitle('GithubRepositoryList - Autenticação');
        }
    }
}
