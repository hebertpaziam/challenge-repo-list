import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { GithubService } from '@app-services/github.service';

import { Repository } from '@app-models/repository.model';

import * as moment from 'moment';
import * as VanillaToasts from 'vanillatoasts';

@Component({
    selector: 'app-repository-list',
    templateUrl: './repository-list.component.html',
    styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
    public repositories: Array<Repository> = [];
    public pageTitle: string;

    constructor(private title: Title, private githubService: GithubService) {}

    ngOnInit() {
        this.title.setTitle('GithubRepositoryList - Meus Repositórios');
        this.githubService.getRepositoryList().subscribe(
            (repositories: Array<Repository>) => {
                Object.assign(this.repositories, repositories);
                this.pageTitle = this.repositories.length ? 'Repositórios' : 'Lista de Repositórios vazia';
            },
            () => {
                this.githubService.singOut();
                VanillaToasts.create({
                    title: 'Erro!',
                    text: `Não foi possivel carregar a lista de repositórios.`,
                    type: 'error',
                    timeout: 3500
                });
            }
        );
    }

    getDate(date): string {
        return moment(date).format('DD/MM/YYYY[ às ]HH:mm');
    }
}
