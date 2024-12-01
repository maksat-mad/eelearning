import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/interfaces';

export const authGuard: CanMatchFn = () => {
  const loginUrlTree = inject(Router).createUrlTree(['/login']);
  const authService = inject(AuthService);
  const userString = localStorage.getItem('user');
  if (!userString) {
    return loginUrlTree;
  }
  const user: User = JSON.parse(userString);
  authService.authError.next(false);
  authService.user.next(user);
  return true;
};
