import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/authguard.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'login-modal',
    loadChildren: () => import('./components/login-modal/login-modal.module').then( m => m.LoginModalPageModule)
  },
  {
    path: 'login-modal',
    loadChildren: () => import('./components/login-modal/login-modal.module').then( m => m.LoginModalPageModule)
  },
  {
    path: 'registro-modal',
    loadChildren: () => import('./components/registro-modal/registro-modal.module').then( m => m.RegistroModalPageModule)
  },
  {
    path: 'suspeita',
    loadChildren: () => import('./pages/suspeita/suspeita.module').then( m => m.SuspeitaPageModule),
    canActivate:[AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
