import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { GithubService } from '@app-services/github.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        const routerStub = {};
        const githubServiceStub = {};
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{ provide: Router, useValue: routerStub }, { provide: GithubService, useValue: githubServiceStub }]
        });
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });
});
