import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-not-found',
    templateUrl: './app-not-found.component.html',
    styleUrls: ['./app-not-found.component.scss']
})
export class AppNotFoundComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    goBack() {
        history.back();
    }
}
