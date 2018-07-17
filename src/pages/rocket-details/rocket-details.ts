import { pairs } from 'rxjs/observable/pairs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { IRocket } from '../../app/Models/iRocket';
import { LaunchDetailsPage } from '../launch-details/launch-details';

/**
 * Generated class for the RocketDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-details',
  templateUrl: 'rocket-details.html',
})
export class RocketDetailsPage {
   rocket: any;
   launches: any;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider
  ) {
    this.rocket = this.navParams.data;

    if(typeof this.rocket == "string"){
      spacexApi.getRocket(this.rocket).subscribe(dataSpaceX => {
        this.rocket = dataSpaceX;    
        this.getLaunchesFromRocket(this.rocket.id);
      });
    }

  }

  getLaunchesFromRocket(rocketid: string): void {
    console.log(rocketid);
    this.spacexApi.getLaunchesFromRocket(
      {
        order: 'desc', rocket_id: rocketid 
      }).subscribe(data => {
        console.log(data)
      this.launches = data;
    })
  }

  goToDetail(launch: any) {
    this.navCtrl.push(LaunchDetailsPage, launch);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailsPage');
  }

}
