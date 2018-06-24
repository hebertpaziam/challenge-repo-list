import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { GithubService } from '@app-services/github.service';

import { RepositoryListComponent } from './repository-list.component';

describe('RepositoryListComponent', () => {
    let comp: RepositoryListComponent;
    let fixture: ComponentFixture<RepositoryListComponent>;

    beforeEach(() => {
        const titleStub = {
            setTitle: () => ({})
        };
        const githubServiceStub = {
            getRepositoryList: () => ({
                subscribe: () => ({})
            }),
            singOut: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [RepositoryListComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: Title, useValue: titleStub }, { provide: GithubService, useValue: githubServiceStub }]
        });
        fixture = TestBed.createComponent(RepositoryListComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('repositories defaults to: []', () => {
        expect(comp.repositories).toEqual([]);
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const titleStub: Title = fixture.debugElement.injector.get(Title);
            const githubServiceStub: GithubService = fixture.debugElement.injector.get(GithubService);
            spyOn(titleStub, 'setTitle');
            spyOn(githubServiceStub, 'getRepositoryList');
            spyOn(githubServiceStub, 'singOut');
            comp.ngOnInit();
            expect(titleStub.setTitle).toHaveBeenCalled();
            expect(githubServiceStub.getRepositoryList).toHaveBeenCalled();
            expect(githubServiceStub.singOut).toHaveBeenCalled();
        });
    });
});
