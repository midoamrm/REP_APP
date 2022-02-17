import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecpieMnuePageRoutingModule } from './recpie-mnue-routing.module';

import { RecpieMnuePage } from './recpie-mnue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecpieMnuePageRoutingModule
  ],
  declarations: [RecpieMnuePage]
})
export class RecpieMnuePageModule {}
