import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecpiesVideosPage } from './recpies-videos.page';

const routes: Routes = [
  {
    path: '',
    component: RecpiesVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecpiesVideosPageRoutingModule {}
