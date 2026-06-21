import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../enviroment/enviroment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private router = inject(Router);

  user = signal<any>(null);

  baseUrl = environment.apiUrl;

  createRequestToken(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/authentication/token/new`);
  }

  validateWithLogin(requestToken: string, username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authentication/token/validate_with_login`, {
      username,
      password,
      request_token: requestToken,
    });
  }

  createSession(requestToken: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authentication/session/new`, {
      request_token: requestToken,
    });
  }

  saveSession(sessionId: string) {
    localStorage.setItem('session_id', sessionId);
  }

  getSessionId() {
    return localStorage.getItem('session_id');
  }

  isLoggedIn() {
    return !!this.getSessionId();
  }

  logout() {
    localStorage.removeItem('session_id');

    localStorage.removeItem('user');

    this.user.set(null);

    this.router.navigate(['/login']);
  }

  getAccountDetails() {
    return this.http.get<any>(`${this.baseUrl}/account?session_id=${this.getSessionId()}`).pipe(
      tap((res) => {
        this.user.set(res);

        localStorage.setItem('user', JSON.stringify(res));
      }),
    );
  }
}
