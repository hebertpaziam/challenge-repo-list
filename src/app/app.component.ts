import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GithubService } from '@app-services/github.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private githubService: GithubService, private router: Router) {}

    ngOnInit() {
        // this.githubService.signStatus.subscribe((status: boolean) => {
        //     if (status === false) {
        //         this.router.navigate(['/autenticacao']);
        //     }
        // });
    }
}
