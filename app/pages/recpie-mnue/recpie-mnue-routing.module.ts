import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecpieMnuePage } from './recpie-mnue.page';

const routes: Routes = [
  {
    path: '',
    component: RecpieMnuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecpieMnuePageRoutingModule {}
