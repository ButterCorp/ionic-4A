import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RocketDetailsPage } from '../rocket-details/rocket-details';
import { LaunchListPage } from '../launch-list/launch-list';
import { LaunchpadDetailPage } from '../launchpad-detail/launchpad-detail';

/**
 * Generated class for the LaunchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-details',
  templateUrl: 'launch-details.html',
})
export class LaunchDetailsPage {

  public launch: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.launch = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailsPage');
  }

  goToDetail(rocket: any) {
    console.log(" >>>>>>>>>> " + rocket.rocket_id)
    this.navCtrl.push(RocketDetailsPage, rocket.rocket_id);
  }

  goToLaunches(launch_id: any) {
    this.navCtrl.push(LaunchListPage, launch_id)
  }
  
  goToLaunchpad(launchpad_id: any) {
    this.navCtrl.push(LaunchpadDetailPage, launchpad_id)
  }

}
