import { Routes } from '@angular/router';

export const routes: Routes = [
  {
	path: 'default',
	redirectTo: '/home',
	pathMatch: 'full'
  },
  {
	path: 'home',
	loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
	// Make sure './home/home.component.ts' exists and exports HomeComponent
  }
];

