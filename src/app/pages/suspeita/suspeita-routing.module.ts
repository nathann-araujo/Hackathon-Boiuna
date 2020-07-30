import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuspeitaPage } from './suspeita.page';

const routes: Routes = [
  {
    path: '',
    component: SuspeitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuspeitaPageRoutingModule {}
