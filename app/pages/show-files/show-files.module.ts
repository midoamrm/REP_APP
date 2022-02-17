import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowFilesPageRoutingModule } from './show-files-routing.module';

import { ShowFilesPage } from './show-files.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowFilesPageRoutingModule
  ],
  declarations: [ShowFilesPage]
})
export class ShowFilesPageModule {}
