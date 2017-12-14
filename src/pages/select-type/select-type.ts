import {GoogleMapPage} from "../google-map/google-map";

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from "../../providers/user-data/user-data";
import { QrcodeScanPage } from "../qrcode-scan/qrcode-scan";

/**
 * Generated class for the SelectTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-type',
  templateUrl: 'select-type.html',
})
export class SelectTypePage {

   orderType:string;
  customerName:string;
  deliveryLocation:string;
  deliveryType:string;
  deliveryDetail:any;
  table_no:string;
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

  getTable = (data)=>{
    return new Promise((resolve, reject) => {
      this.table_no = data.replace("table_","");      
      resolve();
    });
  }

  scanTable(){
    this.navCtrl.push(QrcodeScanPage, {callback: this.getTable});
  }

}
