import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/app.routes').then(r => r.HOME_ROUTES),
    },
];
