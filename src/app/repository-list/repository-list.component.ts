import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-repository-list',
    templateUrl: './repository-list.component.html',
    styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
    constructor(private title: Title) {}

    ngOnInit() {
        this.title.setTitle('GithubRepositoryList - Meus Repositórios');
    }
}
