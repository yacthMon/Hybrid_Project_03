import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OrderPage } from '../order/order';

import { AngularFireDatabase } from 'angularfire2/database';
import { MenuDataProvider, Order } from '../../providers/menu-data/menu-data';


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

  menu: Order;
  constructor(public menuData: MenuDataProvider,public angularfire: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.menu = this.navParams.get('menues');
  }

  goToOrder(){
  	this.navCtrl.push(OrderPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDetailPage');
  }

  addOrderes(menu: Order){
     this.menuData.addOrder({nameMenu:menu.nameMenu,nameImg:menu.nameImg,menuPrice:menu.menuPrice,amout:1});
    this.navCtrl.setRoot(OrderPage);
  }

}
