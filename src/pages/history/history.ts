import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  private history: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private spacexApi: SpacexApiProvider)
  {
    this.getHistory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  getHistory() {
    this.spacexApi.getHistory().subscribe(data => {
      this.history = data;
      console.log(this.history);
    })
  }

  redirect(link: string):void {
    window.open(link, '_system')
  }

}
