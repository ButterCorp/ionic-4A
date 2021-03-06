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
  pastLaunches: ILaunch[];
  launchTime: any;
  interval: any;
  launchTimeCountDown: any;
  pastLaunchesCount: number;
  upcommingLaunchesCount: number;

  constructor(
    public navCtrl: NavController,
    private spacexApi: SpacexApiProvider
  ) {
    this.getNextLaunch();
    this.getNextLaunches();
    this.getPastLaunches();

    this.pastLaunchesCount = 0;
  }

  pet: string = "nextlaunchs";
  isAndroid: boolean = false;

  getNextLaunch(): void {
    this.spacexApi.getNextLaunch()
        .subscribe(data => { this.nextLaunch = data;
                            this.launchTime = data.launch_date_utc; 
                            this.initRefreshCountDown();
          })
  }


  getNextLaunches(): void {
    this.spacexApi.getNextLaunches()
        .subscribe( data => { this.nextLaunches = data;
                              this.upcommingLaunchesCount = data.length });
  }

  getPastLaunches(): void {
    this.spacexApi.getPastLaunches()
        .subscribe( data => { this.pastLaunches = data;
                              this.pastLaunchesCount = data.length });
  }

  goToDetail(launch: ILaunch): void {
    this.navCtrl.push(LaunchDetailsPage, launch);
  }
 
  redirect(link: string):void {
    window.open(link, '_system')
  }
  

  ionViewDidLeave() {
    this.stopRefresh();
  }

  initRefreshCountDown() {
    this.refresh();
    this.interval = setInterval(() => this.refresh(), 1000);
  }

  stopRefresh() {
    clearInterval(this.interval);
  }

  refresh() {
    const currentDate = new Date().getTime();
    const timeToLaunchTime = new Date(this.launchTime).getTime() - currentDate;
    let day, hour, minute, seconds;
    seconds = Math.floor(timeToLaunchTime / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;

    const result = {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds
    };

    this.launchTimeCountDown = result;
  }
}

