import { pairs } from 'rxjs/observable/pairs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public rocket: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rocket = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailsPage');
  }

}
