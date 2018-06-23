import { Component, OnInit } from '@angular/core';

import { GithubService } from '@app-services/github.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor(protected githubService: GithubService) {}

    ngOnInit() {}

    doSignOut() {
        this.githubService.singOut();
    }
    doSignIn() {
        this.githubService.signIn();
    }
}
