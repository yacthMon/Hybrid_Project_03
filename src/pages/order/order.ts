import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  orderType:string;
  customerName:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.orderType = "restaurant"
    console.log('ionViewDidLoad OrderPage');
  }

  segmentChanged(event){
    switch (event._value) {
      case "restaurant":
        
        break;
      case "delivery":
        
        break;
      default:
        break;
    }
  }

}
