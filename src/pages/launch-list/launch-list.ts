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
  private searchQuery: string = '';
  private launches_filter: any;
  items: string[];
  allLaunchesCount:number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private spacexApi: SpacexApiProvider,
  ) {
      spacexApi.getAllLaunches(
        {
          order: 'desc', launch_year: (typeof navParams.data == "string")?navParams.data:""
        }
      ).subscribe(data => {
        this.launches = data;
        this.allLaunchesCount = data.length;
        this.launches_filter = this.launches;
      })
      if(typeof navParams.data == "string"){
        this.year = navParams.data;
      }
 
    }

    initializeItems() {
      this.launches_filter = this.launches;
    }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }
  goToDetail(launch: any) {
    this.navCtrl.push(LaunchDetailsPage, launch);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    //if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.launches_filter = this.launches_filter.filter((item) => {
        return (item.mission_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  

}
