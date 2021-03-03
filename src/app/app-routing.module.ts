import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'promo', loadChildren: () => import('./pages/promo/promo.module').then(m => m.PromoModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
