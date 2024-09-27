import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatWePlayPage } from './what-we-play.page';

const routes: Routes = [
  {
    path: '',
    component: WhatWePlayPage
  },  {
    path: 'achievement',
    loadChildren: () => import('./achievement/achievement.module').then( m => m.AchievementPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatWePlayPageRoutingModule {}
