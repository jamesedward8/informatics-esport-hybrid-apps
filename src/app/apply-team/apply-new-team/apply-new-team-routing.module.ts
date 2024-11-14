import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyNewTeamPage } from './apply-new-team.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyNewTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyNewTeamPageRoutingModule {}
