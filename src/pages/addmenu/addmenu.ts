import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Menu, MenuDataProvider } from '../../providers/menu-data/menu-data';
/**
 * Generated class for the AddmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addmenu',
  templateUrl: 'addmenu.html',
})
export class AddmenuPage {

	menu:Menu ={
		nameMenu:'',
		detail:'',
		menuPrice:0,
		nameImg:''
	}
  constructor(public navCtrl: NavController, public navParams: NavParams, public mpv :MenuDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmenuPage');
  }

  saveData(){
  	this.mpv.addMenu(this.menu);
  }
}
