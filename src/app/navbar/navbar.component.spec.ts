import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubService } from '@app-services/github.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let comp: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async(() => {
        const githubServiceStub = {
            singOut: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: GithubService, useValue: githubServiceStub }]
        });
        fixture = TestBed.createComponent(NavbarComponent);
        comp = fixture.componentInstance;
    }));

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('doSignOut', () => {
        it('makes expected calls', () => {
            const githubServiceStub: GithubService = fixture.debugElement.injector.get(GithubService);
            spyOn(githubServiceStub, 'singOut');
            comp.doSignOut();
            expect(githubServiceStub.singOut).toHaveBeenCalled();
        });
    });
});
