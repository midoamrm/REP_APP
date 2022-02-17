import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepiesvideosPage } from './repiesvideos.page';

const routes: Routes = [
  {
    path: '',
    component: RepiesvideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepiesvideosPageRoutingModule {}
