import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchpadDetailPage } from '../launchpad-detail/launchpad-detail';
/**
 * Generated class for the LaunchpadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad',
  templateUrl: 'launchpad.html',
})
export class LaunchpadPage {

  launchpads: any;
  allLaunchpadsCount: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider
  ) { 
    this.getAllLaunchpads();
   }

  ionViewDidLoad() {
  }

  getAllLaunchpads(): void {
    this.spacexApi.getAllLaunchpads()
        .subscribe(data => { this.launchpads = data;
                             this.allLaunchpadsCount = data.length; });
  }

  goToLaunchpadDetail(launchpad): void {
    this.navCtrl.push(LaunchpadDetailPage, launchpad);
  }

}
