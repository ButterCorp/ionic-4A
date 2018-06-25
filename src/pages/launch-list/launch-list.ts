import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { ILaunch } from '../../app/Models/ILaunch';
import { LaunchDetailsPage } from '../launch-details/launch-details';

/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {
  public launches: any;
  public year: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private spacexApi: SpacexApiProvider
  ) {
      spacexApi.getAllLaunches(
        {
          order: 'desc', launch_year: (navParams.data > 1900)?navParams.data:2018
        }
      ).subscribe(data => {
        this.launches = data;
      })
      this.year = navParams.data;
    }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }
  goToDetail(launch: any) {
    this.navCtrl.push(LaunchDetailsPage, launch);
  }

}
