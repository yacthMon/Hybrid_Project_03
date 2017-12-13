import {GoogleMapPage} from "../google-map/google-map";

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from "../../providers/user-data/user-data";

import { SelectTypePage } from '../select-type/select-type';

import { Menu, MenuDataProvider,Order } from '../../providers/menu-data/menu-data';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



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
  
  result:number=1;
  orders:Order[];

  constructor(public c:MenuDataProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.orders = this.c.getOrder();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  doPlus(amouts:number){
    //this.order.amouts=amouts+1;
  }
  doMinus(amouts:number){
    //amouts=amouts-1;
  }

  goToTypeOrder(){
    this.navCtrl.push(SelectTypePage);
  }
}
