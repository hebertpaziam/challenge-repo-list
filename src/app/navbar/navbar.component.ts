import { Component, OnInit } from '@angular/core';

import { GithubService } from '@app-services/github.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isSignedIn: boolean;

    constructor(private githubService: GithubService) {}

    ngOnInit() {
        this.githubService.signStatusObservable.subscribe((status) => {
            this.isSignedIn = status;
        });
    }

    doSignOut() {
        this.githubService.singOut();
    }
}
