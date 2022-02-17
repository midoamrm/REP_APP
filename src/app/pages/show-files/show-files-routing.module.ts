import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowFilesPage } from './show-files.page';

const routes: Routes = [
  {
    path: '',
    component: ShowFilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowFilesPageRoutingModule {}
