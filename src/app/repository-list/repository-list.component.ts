import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { GithubService } from '@app-services/github.service';

import { Repository } from '@app-models/repository.model';

import * as moment from 'moment';

@Component({
    selector: 'app-repository-list',
    templateUrl: './repository-list.component.html',
    styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
    protected repositories: Array<Repository> = [];
    protected pageTitle: string;

    constructor(private title: Title, private githubService: GithubService) {}

    ngOnInit() {
        this.title.setTitle('GithubRepositoryList - Meus Repositórios');
        this.githubService.getRepositoryList().subscribe((repositories: Array<Repository>) => {
            Object.assign(this.repositories, repositories);
            if (this.repositories.length) {
                this.pageTitle = 'Lista de Repositórios';
            } else {
                this.pageTitle = 'Lista de Repositórios vazia';
            }
        }, () => (this.pageTitle = 'Erro ao carregar repositório'));
    }

    getDate(date): string {
        return moment(date).format('DD/MM/YYYY[ às ]HH:mm');
    }
}
