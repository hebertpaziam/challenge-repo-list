import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRepositoryListComponent } from './app-repository-list.component';

describe('AppRepositoryListComponent', () => {
  let component: AppRepositoryListComponent;
  let fixture: ComponentFixture<AppRepositoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRepositoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
