import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages').then(m => m.PAGES_ROUTES),
    },
];
