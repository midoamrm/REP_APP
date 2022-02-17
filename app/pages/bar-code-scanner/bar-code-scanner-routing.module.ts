import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarCodeScannerPage } from './bar-code-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: BarCodeScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarCodeScannerPageRoutingModule {}
