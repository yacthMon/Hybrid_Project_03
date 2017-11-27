import {GoogleMapPage} from "../google-map/google-map";

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from "../../providers/user-data/user-data";
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
  deliveryLocation:string;
  deliveryType:string;
  deliveryDetail:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData:UserDataProvider) {
    this.deliveryDetail = {homeNumber:"",landmarks:""}
  }

  ionViewDidLoad() {
    this.orderType = "restaurant"
    this.customerName = this.userData.name;
    console.log('ionViewDidLoad OrderPage');
  }

  openGoogleMap(){
    this.navCtrl.push(GoogleMapPage, {callback: this.getLocation});
  }

  getLocation = (data)=>{
    return new Promise((resolve, reject) => {
      this.deliveryLocation = data;      
      resolve();
    });
  }

}
