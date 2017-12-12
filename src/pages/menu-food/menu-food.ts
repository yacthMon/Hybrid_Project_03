import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {FoodDetailPage} from '../food-detail/food-detail';

/**
 * Generated class for the MenuFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu-food',
  templateUrl: 'menu-food.html',
})
export class MenuFoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuFoodPage');
  }

  goFoodDetail(){
  	this.navCtrl.push(FoodDetailPage);
  }

}
