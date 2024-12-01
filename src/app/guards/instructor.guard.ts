import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/interfaces';

export const instructorGuard: CanMatchFn = () => {
  const pagesUrlTree = inject(Router).createUrlTree(['/pages']);
  const authService = inject(AuthService);
  const userString = localStorage.getItem('user');
  if (!userString) {
    return pagesUrlTree;
  }
  const user: User = JSON.parse(userString);
  authService.authError.next(false);
  authService.user.next(user);

  if (user.is_student) {
    return pagesUrlTree;
  }
  return true;
};
