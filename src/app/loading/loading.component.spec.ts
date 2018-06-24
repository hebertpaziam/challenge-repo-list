import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { GithubService } from '@app-services/github.service';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
    let comp: LoadingComponent;
    let fixture: ComponentFixture<LoadingComponent>;

    beforeEach(async(() => {
        const activatedRouteStub = {
            queryParams: {
                subscribe: () => ({})
            }
        };
        const routerStub = {
            navigate: () => ({})
        };
        const githubServiceStub = {
            signIn: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [LoadingComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub },
                { provide: Router, useValue: routerStub },
                { provide: GithubService, useValue: githubServiceStub }
            ]
        });
        fixture = TestBed.createComponent(LoadingComponent);
        comp = fixture.componentInstance;
    }));

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const routerStub: Router = fixture.debugElement.injector.get(Router);
            const githubServiceStub: GithubService = fixture.debugElement.injector.get(GithubService);
            spyOn(githubServiceStub, 'signIn');
            comp.ngOnInit();
        });
    });
});
