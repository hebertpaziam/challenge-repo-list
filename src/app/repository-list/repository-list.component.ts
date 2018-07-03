import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
    public pageTitle: string;

    public repositories: Array<Repository> = [];
    public repositoriesToShow: Array<Repository> = [];

    public searchTerm: string;
    public searchTermStream = new Subject<string>();

    constructor(private title: Title, private githubService: GithubService) {}

    ngOnInit() {
        this.title.setTitle('GithubRepositoryList - Meus Repositórios');

        this.searchTermStream
            .pipe(
                debounceTime(400),
                distinctUntilChanged()
            )
            .subscribe((term) => this.doSearch(term));

        this.githubService.getRepositoryList().subscribe(
            (repositories: Array<Repository>) => {
                Object.assign(this.repositories, repositories);
                Object.assign(this.repositoriesToShow, repositories);
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

    doSearch(term: string) {
        this.repositoriesToShow = this.repositories.filter((repos: Repository) => {
            return (
                (repos.name && repos.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1) ||
                (repos.description && repos.description.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1) ||
                (repos.language && repos.language.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1)
            );
        });
    }

    getDate(date): string {
        return moment(date).format('DD/MM/YYYY[ às ]HH:mm');
    }
}
