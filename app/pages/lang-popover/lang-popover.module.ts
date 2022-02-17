import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangPopoverPageRoutingModule } from './lang-popover-routing.module';

import { LangPopoverPage } from './lang-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LangPopoverPageRoutingModule
  ],
  declarations: [LangPopoverPage]
})
export class LangPopoverPageModule {}
