import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadedrecpPageRoutingModule } from './uploadedrecp-routing.module';

import { UploadedrecpPage } from './uploadedrecp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadedrecpPageRoutingModule
  ],
  declarations: [UploadedrecpPage]
})
export class UploadedrecpPageModule {}
