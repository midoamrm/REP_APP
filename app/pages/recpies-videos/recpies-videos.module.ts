import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecpiesVideosPageRoutingModule } from './recpies-videos-routing.module';

import { RecpiesVideosPage } from './recpies-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecpiesVideosPageRoutingModule
  ],
  declarations: [RecpiesVideosPage]
})
export class RecpiesVideosPageModule {}
