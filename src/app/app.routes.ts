import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent),
    title: 'Login',
  },
  {
    path: 'pages',
    loadChildren: () => import('./routes/mainRoutes').then((routes) => routes.mainRoutes),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
