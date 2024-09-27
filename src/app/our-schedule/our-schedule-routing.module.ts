import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurSchedulePage } from './our-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: OurSchedulePage
  },  {
    path: 'schedule-detail',
    loadChildren: () => import('./schedule-detail/schedule-detail.module').then( m => m.ScheduleDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurSchedulePageRoutingModule {}
