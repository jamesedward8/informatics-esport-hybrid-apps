import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'what-we-play',
    loadChildren: () => import('./what-we-play/what-we-play.module').then( m => m.WhatWePlayPageModule)
  },
  {
    path: 'who-we-are',
    loadChildren: () => import('./who-we-are/who-we-are.module').then( m => m.WhoWeArePageModule)
  },
  {
    path: 'our-schedule',
    loadChildren: () => import('./our-schedule/our-schedule.module').then( m => m.OurSchedulePageModule)
  },
  {
    path: 'achievement',
    loadChildren: () => import('./what-we-play/achievement/achievement.module').then( m => m.AchievementPageModule)
  },
  { 
    path: 'teams',
    loadChildren: () => import('./what-we-play/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'team-members',
    loadChildren: () => import('./what-we-play/teams/team-members/team-members.module').then( m => m.TeamMembersPageModule)
  },
  {
    path: 'schedule-detail',
    loadChildren: () => import('./our-schedule/schedule-detail/schedule-detail.module').then( m => m.ScheduleDetailPageModule)
  },
  {
    path: 'schedule-detail/:title',
    loadChildren: () => import('./our-schedule/schedule-detail/schedule-detail.module').then( m => m.ScheduleDetailPageModule)
  },
  {
    path: 'achievement/:name',
    loadChildren: () => import('./what-we-play/achievement/achievement.module').then( m => m.AchievementPageModule)
  },
  { 
    path: 'teams/:name',
    loadChildren: () => import('./what-we-play/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'team-members/:game/:team',
    loadChildren: () => import('./what-we-play/teams/team-members/team-members.module').then( m => m.TeamMembersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
