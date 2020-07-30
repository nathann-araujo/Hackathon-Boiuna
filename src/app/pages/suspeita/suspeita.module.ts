import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuspeitaPageRoutingModule } from './suspeita-routing.module';

import { SuspeitaPage } from './suspeita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuspeitaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SuspeitaPage]
})
export class SuspeitaPageModule {}
