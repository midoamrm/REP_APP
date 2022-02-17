import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarCodeScannerPageRoutingModule } from './bar-code-scanner-routing.module';

import { BarCodeScannerPage } from './bar-code-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarCodeScannerPageRoutingModule
  ],
  declarations: [BarCodeScannerPage]
})
export class BarCodeScannerPageModule {}
