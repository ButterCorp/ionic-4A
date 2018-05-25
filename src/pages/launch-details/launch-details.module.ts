import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchDetailsPage } from './launch-details';

@NgModule({
  declarations: [
    LaunchDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchDetailsPage),
  ],
})
export class LaunchDetailsPageModule {}
