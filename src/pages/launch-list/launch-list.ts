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
  private launches: any;
  private year: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private spacexApi: SpacexApiProvider
  ) {
      spacexApi.getAllLaunches(
        {
          order: 'desc', launch_year: (typeof navParams.data == "string")?navParams.data:""
        }
      ).subscribe(data => {
        this.launches = data;
      })
      if(typeof navParams.data == "string"){
        this.year = navParams.data;
      }
 
  
    }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }
  goToDetail(launch: any) {
    this.navCtrl.push(LaunchDetailsPage, launch);
  }

}
