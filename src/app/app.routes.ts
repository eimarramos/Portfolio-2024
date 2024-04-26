import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home',
    loadChildren: () =>
      import('./pages/home/app.routes').then((r) => r.HOME_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'Home',
  },
];
