import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FoodDetailPage } from '../food-detail/food-detail';
import { Menu, MenuDataProvider } from '../../providers/menu-data/menu-data';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


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

  menues: FirebaseListObservable<any[]>;
  constructor(public angularfire: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public menuData: MenuDataProvider) {
    this.menues = menuData.getMenu();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuFoodPage');
  }

  goFoodDetail(menu: Menu) {
    this.navCtrl.push(FoodDetailPage, { menues: menu });
  }

  goBack() {
    this.navCtrl.pop();
    console.log('Click on button Test Console Log');
  }



}
