import { Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { computed } from '@angular/core';
import LayoutComponent from './layout/layout.component';
import { mainRoutes } from './routes/main.routes';
const appName = computed<string>(() => environment.appName);

export const routes: Routes = [
  {
    title: appName,
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        title: 'Home',
        loadChildren: () => mainRoutes,
      },
    ],
  },

  {
    title: 'Not Found',
    path: '**',
    redirectTo: 'home',
  }
];
