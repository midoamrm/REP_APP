import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangTestPage } from './lang-test.page';

const routes: Routes = [
  {
    path: '',
    component: LangTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangTestPageRoutingModule {}
