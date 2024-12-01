import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { User } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  authError = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    this.http.post('/api/login', {
      username,
      password,
    }).pipe(
      catchError(error => {
        this.authError.next(true);
        return throwError(() => new Error(error));
      })
    )
    .subscribe((data: any) => {
      this.authError.next(false);
      this.user.next(data);
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigateByUrl('/pages');
      return data;
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    this.authError.next(false);
    this.user.next(null);
    this.router.navigateByUrl('/login');
  }
}
