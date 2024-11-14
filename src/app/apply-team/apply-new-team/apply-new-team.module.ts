import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyNewTeamPageRoutingModule } from './apply-new-team-routing.module';

import { ApplyNewTeamPage } from './apply-new-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyNewTeamPageRoutingModule
  ],
  declarations: [ApplyNewTeamPage]
})
export class ApplyNewTeamPageModule {}
