import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { GithubService } from '@app-services/github.service';

import { AuthenticationComponent } from './authentication.component';

describe('AuthenticationComponent', () => {
    let comp: AuthenticationComponent;
    let fixture: ComponentFixture<AuthenticationComponent>;

    beforeEach(() => {
        const titleStub = {
            setTitle: () => ({})
        };
        const routerStub = {
            navigate: () => ({})
        };
        const githubServiceStub = {
            getSignedStatus: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [AuthenticationComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: Title, useValue: titleStub },
                { provide: Router, useValue: routerStub },
                { provide: GithubService, useValue: githubServiceStub }
            ]
        });
        fixture = TestBed.createComponent(AuthenticationComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const titleStub: Title = fixture.debugElement.injector.get(Title);
            const routerStub: Router = fixture.debugElement.injector.get(Router);
            const githubServiceStub: GithubService = fixture.debugElement.injector.get(GithubService);
            spyOn(titleStub, 'setTitle');
            spyOn(routerStub, 'navigate');
            spyOn(githubServiceStub, 'getSignedStatus');
            comp.ngOnInit();
            expect(titleStub.setTitle).toHaveBeenCalled();
            expect(routerStub.navigate).toHaveBeenCalled();
            expect(githubServiceStub.getSignedStatus).toHaveBeenCalled();
        });
    });
});
