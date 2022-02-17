import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LangTestPageRoutingModule } from './lang-test-routing.module';

import { LangTestPage } from './lang-test.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    LangTestPageRoutingModule
  ],
  declarations: [LangTestPage]
})
export class LangTestPageModule {}
