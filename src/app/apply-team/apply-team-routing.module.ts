import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyTeamPage } from './apply-team.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyTeamPage
  },  {
    path: 'apply-new-team',
    loadChildren: () => import('./apply-new-team/apply-new-team.module').then( m => m.ApplyNewTeamPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyTeamPageRoutingModule {}
