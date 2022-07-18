import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor() { }

    setAuthorizationToken(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }

    getAuthorizationToken(): string | null {
        return sessionStorage.getItem('access_token');
    }

}