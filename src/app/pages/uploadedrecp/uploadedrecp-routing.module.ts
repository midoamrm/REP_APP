import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadedrecpPage } from './uploadedrecp.page';

const routes: Routes = [
  {
    path: '',
    component: UploadedrecpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadedrecpPageRoutingModule {}
