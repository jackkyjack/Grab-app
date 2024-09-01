import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'firstlogin',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'firstlogin',
    loadComponent: () => import('./firstlogin/firstlogin.page').then( m => m.FirstloginPage)
  },
  {
    path: 'food',
    loadComponent: () => import('./food/food.page').then( m => m.FoodPage)
  },
];
