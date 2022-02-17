import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepiesvideosPageRoutingModule } from './repiesvideos-routing.module';

import { RepiesvideosPage } from './repiesvideos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepiesvideosPageRoutingModule
  ],
  declarations: [RepiesvideosPage]
})
export class RepiesvideosPageModule {}
