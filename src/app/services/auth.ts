import { Injectable, inject, signal } from '@angular/core';
import { Observable, of, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Auth {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/auth/login';

  isLoggedIn = signal<boolean>(this.getToken() !== null);

  login(credentials: { username: string, password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);

        this.isLoggedIn.set(true);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');

    this.isLoggedIn.set(false);
  }

}
