import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
    let comp: NotFoundComponent;
    let fixture: ComponentFixture<NotFoundComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NotFoundComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(NotFoundComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });
});
