import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchDetailsPage } from '../launch-details/launch-details';
import { ILaunch } from '../../app/Models/ILaunch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextLaunch: ILaunch;
  nextLaunches: ILaunch[];

  constructor(
    public navCtrl: NavController,
    private spacexApi: SpacexApiProvider
  ) {
    this.getNextLaunch();
    this.getNextLaunches();
  }

  pet: string = "nextlaunchs";
  isAndroid: boolean = false;

  getNextLaunch(): void {
    this.spacexApi.getNextLaunch()
        .subscribe(data => { this.nextLaunch = data; });
  }

  getNextLaunches(): void {
    this.spacexApi.getNextLaunches()
        .subscribe( data => { this.nextLaunches = data; });
  }

  goToDetail(launch: ILaunch): void {
    this.navCtrl.push(LaunchDetailsPage, launch);
  }
 
}
