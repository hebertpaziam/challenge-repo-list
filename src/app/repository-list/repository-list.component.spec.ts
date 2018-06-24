import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { GithubService } from '@app-services/github.service';

import { RepositoryListComponent } from './repository-list.component';

import { Repository } from '@app-models/repository.model';

describe('RepositoryListComponent', () => {
    let comp: RepositoryListComponent;
    let fixture: ComponentFixture<RepositoryListComponent>;

    beforeEach(async(() => {
        const titleStub = {
            setTitle: () => ({})
        };
        const githubServiceStub = {
            getRepositoryList: () => new Observable<Array<Repository>>(),
            singOut: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [RepositoryListComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: Title, useValue: titleStub }, { provide: GithubService, useValue: githubServiceStub }]
        });
        fixture = TestBed.createComponent(RepositoryListComponent);
        comp = fixture.componentInstance;
    }));

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
            spyOn(githubServiceStub, 'getRepositoryList').and.returnValue(new Observable<Array<Repository>>());
            comp.ngOnInit();
            expect(titleStub.setTitle).toHaveBeenCalled();
            expect(githubServiceStub.getRepositoryList).toHaveBeenCalled();
        });
    });
});
