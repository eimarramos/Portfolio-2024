import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/app.routes').then((r) => r.HOME_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
