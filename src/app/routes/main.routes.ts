import { Routes } from '@angular/router';
import { HomePageComponent, ContactsPageComponent } from '../pages/';
export const mainRoutes: Routes = [
  {
    path: '',
    title: '',
    loadComponent: () => HomePageComponent,
  },
  {
    path: 'contacts',
    title: 'Contacts',
    loadComponent: () => ContactsPageComponent,
  },
];

export default mainRoutes;
