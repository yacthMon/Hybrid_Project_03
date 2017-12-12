import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderPage } from '../order/order';

/**
 * Generated class for the FoodDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-food-detail',
  templateUrl: 'food-detail.html',
})
export class FoodDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToOrder(){
  	this.navCtrl.push(OrderPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDetailPage');
  }

}
