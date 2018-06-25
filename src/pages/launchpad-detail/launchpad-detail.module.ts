import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchpadDetailPage } from './launchpad-detail';

@NgModule({
  declarations: [
    LaunchpadDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchpadDetailPage),
  ],
})
export class LaunchpadDetailPageModule {}
