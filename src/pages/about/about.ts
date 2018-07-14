import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  private info: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private spacexApi: SpacexApiProvider
  ) { 
    this.getInfo();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  getInfo() {
    this.spacexApi.getInfo().subscribe(data => {
      this.info = data;
    })
  }

}
