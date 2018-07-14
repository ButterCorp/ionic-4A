import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the LaunchpadDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-detail',
  templateUrl: 'launchpad-detail.html',
})
export class LaunchpadDetailPage {

  private launchpad: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider
  ) {
    this.launchpad = this.navParams.data;

    if(typeof this.launchpad == "string"){
      spacexApi.getLaunchpad(this.launchpad).subscribe(dataSpaceX => {
        this.launchpad = dataSpaceX;      
      });
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadDetailPage');
  }

}
