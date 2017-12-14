import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SelectTypePage } from '../select-type/select-type';
import { MenuFoodPage} from '../menu-food/menu-food';

import { MenuDataProvider,Order, Menu } from '../../providers/menu-data/menu-data';



/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {  
  
  orders:Order[];
  balance:number;

  constructor(public menuData:MenuDataProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.orders = this.menuData.getOrder();
    this.getTotal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  doPlus(order:Order){
    order.amout += 1;
    this.getTotal();
  }

  doMinus(order:Order){
    order.amout -= 1;
    if(order.amout == 0){
      this.menuData.removeOrder(order);
    }
    this.getTotal();
  }

  getTotal(){
    console.log("Renew balance");
    this.balance = this.menuData.calTotal();
  }

  goToTypeOrder(){
    this.navCtrl.push(SelectTypePage);
  }
  goToMenu(){
    this.navCtrl.push(MenuFoodPage);
  }
}
