import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    constructor() {}

    isLogged(): boolean {
        return true;
    }
}
