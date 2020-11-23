import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./Pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./Pages/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'sign-up-token',
    loadChildren: () => import('./Pages/sign-up-token/sign-up-token.module').then( m => m.SignUpTokenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
