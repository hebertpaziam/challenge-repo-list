import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GithubService } from '@app-services/github.service';

import * as VanillaToasts from 'vanillatoasts';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService, private router: Router) {}

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
            const code = params['code'];
            if (code) {
                this.githubService.signIn(code);
            } else {
                VanillaToasts.create({
                    title: 'Erro!',
                    text: `Não foi possivel se autenticar no GitHub, tente novamente mais tarde.`,
                    type: 'error',
                    timeout: 3500
                });
                this.router.navigate(['meus-repositorios']);
            }
        });
    }
}
